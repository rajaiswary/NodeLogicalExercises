// i/o
var fs = require('fs');

function rFSy(fileName)
 {
//      var con = fs.readFileSync(fileName,'utf8');
//      return con.toUpperCase();
         var p = new Promise((res,rej)=>{
            console.log("reading file")
            var con = "this is it";
            res(con)
            rej("wrong")
         });
         return p;

}
var content = rFSy('myFi.txt');
content.then((r)=>{
    console.log(r)
}).catch((err)=>{console.log(err)})