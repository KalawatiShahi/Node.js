
const fs = require("fs");


//  fs.writeFileSync("example.txt","Hello there again");


// const result = fs.readFileSync("example.txt", "utf-8");
// console.log(result)


// fs.writeFile("example.txt","Kalawati Shahi" ,(err)=>{
//     if(err){
//         console.log("Error");
//     }else{
//         console.log("File Created SuccessFully");
//     }
// });


// fs.appendFile("example.txt", "\nThis is new text!", (err)=>{
//     if(err) console.log(err)
//         else
//     console.log("New Content Added");
// })


// fs.unlink("example.txt",(err)=>{
//     if(err) console.log(err)
//         else
//     console.log("File Remove");
// })

fs.unlink("example.txt", (err)=>{
    if(err)
        console.log("Error");
    else
        console.log("File Removed");
})