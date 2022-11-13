var fs = require('readline-sync');
const flight = [];
var n = fs.question("Enter array size");
for(var i = 0;i<n;i++)
{
    var num = fs.question("Enter "+i+" element");
    flight.push(parseInt(num));
}
console.log(flight);
for(var i = 0;i<n;i++)
{
    for(var j = 0;j<(n-i-1);j++)
    {
        if(flight[j]>flight[j+1])
        {
            var t = flight[j];
            flight[j] = flight[j+1];
            flight[j+1] = t;
        }
    }
}
console.log("sorted array is "+flight);
var s = fs.question("Enter the number");
for(var k = 0 ; k<n ; k++)
{
    if(s == flight[k])
      break;
}
console.log(flight[k]);

