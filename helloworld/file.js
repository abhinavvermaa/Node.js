const fs = require('fs'); 
//sync:
// fs.writeFileSync('./test.txt', 'hello world');
//Async:
// fs.writeFile('test.txt', 'hello  Async', (err)=>{})

// const result =   fs.readFileSync("./contacts.txt","utf-8")
// console.log(result)
fs.readFile("./contacts.txt","utf-8" , (err,result)=>{
  if(err){
    console.log("error",err);
  }
  else{
    console.log(result);
    
  }
})