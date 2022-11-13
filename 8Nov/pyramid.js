const fs = require('readline-sync');
var n = fs.question("Enter the size of rows");
for(var i = 0 ; i<n ; i++)
{
    for(var j = n-1 ; j>i ; j--)
    {
        process.stdout.write(" ")
    }
    for(var k = 1 ; k <= i ; k++)
    {
        process.stdout.write(k+"")
    }
    process.stdout.write("\n");
}