const fs = require('readline-sync');
var n = fs.question("enter array Size")
const arr = [];
const occu = [];
const narr = [];
var o ;
for(var i = 0;i<n;i++)
{
    var num = fs.question("Enter "+i+" element");
    arr.push(parseInt(num));
}
console.log(arr);
// finding duplicates
for(var k = 0 ;k<n ;k++)//k=0
{
    
    for(var j = k+1 ; j<n ; j++)//j=k+1
    {
        if(arr[k] == arr[j])
        {
            
            o++;
            occu.push(parseInt(o));
            narr.push(arr[j]);
            
        }
        o = 1;
        
    }
    
}
console.log(narr);
console.log("new one");
console.log(occu);