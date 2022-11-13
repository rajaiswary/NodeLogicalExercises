const rd = require('readline-sync');
var n = rd.question("Enter the size of rows");
for(var i = 1 ; i<=n ;i++)
{
    for(var k = n;k>i;k-- )
    {
        process.stdout.write(" ");
    }
    for(var j = 1;j<=i;j++)
    {
        var num = i+" ";
        process.stdout.write(num);
    }
    process.stdout.write("\n");
}