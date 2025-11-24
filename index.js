const fs = require('fs');


// fs.writeFileSync("example.txt", "Hello there");
// console.log("file create");

// fs.writeFile("example.txt", "Hello async", (err)=>{
//     console.log("File Created");
// });

// const data = fs.readFileSync("example.txt",  "utf-8");
// console.log(data);



// fs.readFile("contacts.txt","utf-8", (err, data)=>{
//     if(err){
//         console.log("Error");
//     }else{
//         console.log(data);
//     }
// })

// const data = fs.readFileSync("./contacts.txt", "utf-8");
//   console.log(data);


// fs.appendFile("test.txt" , "hey there\n", (err)=>{
//     if(err){
//         console.log("Error")
//     }else{
//         console.log("Data Append")
//     }
// });
   

// fs.rename("example.txt", "newname", (error)=>{
//     if(error){
//     console.log("Error");
//     }else{
//     console.log("Rename File");
//     }
// })

fs.unlink("newname", (error)=>{
    if(error){
        conole.log("Error");
    }else{
        console.log("Delete file");
    }
})