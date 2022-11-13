function exe(task){
    console.log("executing task");
    var data = "from para"
    task(data);

}

// function doThis(){
//     console.log("hey")
// }
// exe(doThis);
// exe(function(params){
//     console.log("hello",params)
// });
var http = require("http");
http.createServer((req,res)=>
{
    res.writeHead(200,{
        "content-type":"text/plain"
    })
    res.end("hello world")
}).listen(5000,()=>
{
    console.log("server is running on 5000")
})