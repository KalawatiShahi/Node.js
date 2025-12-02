
const express = require("express");
const http = require("http");

const app = express();

app.get('/', (req, res)=>{
    return res.send("Hello from Home age");
});

app.get('/about', (req, res)=>{
    return res.send("Hello from About Page");
});

function myHandler(req, res){

    if(req.url === "/faviconico") return res.end();
    const log = `Hello there:${req.method} ${req.url} New Req Received!\n` 
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log ,(err, data)=>{
    
       switch(myUrl.pathname){
        case '/': if(req.method === "GET")
        res.end("home page");
        break;
        case '/about': 
        const username = myUrl.query.myname;
        res.end(`hello ${username}`);
        break;
        case '/search':
        const search = myUrl.query.search_query;
        res.end("Here are your Result for: " + search); 
        break;
        case '/signup': if(req.method === "GET")
        res.end("This is you Sign up form");
        
        else if(req.method === "POST"){
            //database s
            res.end("Successfull");
        }
        
        default: 
        res.end("404 not found");
    }
    });
}

const myServer = http.createServer(app);


app.listen(3000,()=>console.log("Server Start"));

