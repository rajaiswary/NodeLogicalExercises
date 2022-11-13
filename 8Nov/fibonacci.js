const rd = require('readline-sync');
var n = rd.question("Enter the limit of fibonacci");
var a = 0;
var b = 1;
var c = 0;
for(var i = 1; i<=n ; i++)
{
    console.log(c);
    a = b;
    b = c;
    c = a+b;
}