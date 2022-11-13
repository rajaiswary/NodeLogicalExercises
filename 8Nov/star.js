const fs = require('readline-sync');
var n = fs.question("Enter row size ");

for(var i = 1 ; i<=n ; i++)
{
    for(var j = 1 ; j <= n-i ; j++)
    {
         process.stdout.write(" ")
    }
    for(var k = 0 ; k < 2*i-1 ; k++)
    {
        process.stdout.write("*")
    }
    process.stdout.write("\n")
    
}