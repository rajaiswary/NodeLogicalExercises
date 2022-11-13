const rd = require('readline-sync');
var n = rd.question("enter the size for array 1 ");
var m = rd.question("enter the size of array 2 ");
const arr1= [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
var newar;
for(var i = 0;i<n;i++)
{
    var a = rd.question("Enter "+i+" element for array 1 ")
    arr1.push(parseInt(a))
}
for(var j = 0;j<m;j++)
{
    var  b = rd.question("Enter "+i+" element for array 2 ")
    arr2.push(parseInt(b))
}
newar = arr1.concat(arr2);
console.log(newar);
var nl = newar.length;


for(var k = 0 ; k<nl; k++)
{
    arr3.push(parseInt( newar[k]))
}
console.log(arr3);
for(var k = 0 , e = k+1;k<nl ;k++, e++)//k=0
{
    
        if(arr3[k] == arr3[e])
        {
            
            continue;
            
        }
        else
        {
            arr4.push(arr3[k])
        }
        
    
    
    
}
console.log(arr4);
