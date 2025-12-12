const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;
// middleware- plugin
app.use(express.urlencoded({extended: false}));

app.use((req, res, next)=>{
fs.appendFile("log.txt", `\n${Date.now()}: ${req.method}: ${req.path}`, (err, data)=>{
  next();
})

})
app.use((req, res, next)=>{
    console.log("Hello from middleware");
    next();
})

app.get("/users", (req, res)=>{
    const html = `
    <ul>
     ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html)
});

//   header 
app.get("/api/users", (req, res)=>{
    res.setHeader("x-myName", "Kalawti Shahi");
    return res.json(users);
});
//API route
app.route("/api/user/:id").get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    if(!user) return res.status(404).json({error: "User not Found"});
    return res.json(user);
})
.patch((req, res)=> {
    // Edit user with id
    
    return res.json({status: "Pending"});
})
.delete((req, res)=>{
    // delete user id
     return res.json({status: "Pending"});
});

app.post("/api/users",(req, res)=>{
    // Create new user
    const body = req.body;
    if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({message: "All fields are required..."});
    }
    users.push({...body, id: users.length  });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
          return res.status(201).json({status: "Success", id: users.length });
    })
    
});

app.listen(PORT, ()=> console.log(`Server Started at PORT :${PORT}`))
