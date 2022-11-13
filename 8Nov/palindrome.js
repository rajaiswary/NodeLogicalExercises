const fs = require('readline-sync');
let n = fs.question("enter a string ");
l = n.length;
var count = 0;

for(var i = 0; i<(l/2) ;i++)
{
    if(n[i] != n[l-1-i])
    {
        console.log("its not a palindrome");
        count++;
        break;
    }

}
if(count == 0)
{
    console.log("its a palindrome");
}