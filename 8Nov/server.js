//#1
const { response } = require('express')
const rd = require('readline-sync');
const fs = require('fs');
var n = rd.question("Which page do you want");
const axios = require('axios')
// const http = require('https');
if(n == 1)
{
    axios.get('https://reqres.in/api/users?page=1')
    .then(function(response){
    fs.writeFileSync("1.json",response.data.data);
   });
}
else if(n == 2)
{
    axios.get('https://reqres.in/api/users?page=2')
    .then(function(response){
    fs.writeFileSync("2.json",response.data.data);
   });
}
else{
    console.log("invalid input");
}
//#1
// http.get('https://reqres.in/api/users',(res)=>{
//       var content = '';
//       res.on('data',(data)=>{
//         content += data;
//       });
//       res.on('end',()=>{
//         console.log(content)
//         console.log("data received")
//       });
// });
