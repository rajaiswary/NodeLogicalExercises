const rd = require('readline-sync');
let s = rd.question("Enter a sentence");
l = s.length;
var ans ="";
    for (var i = l-1 ; i >= 0; i--)
    {
        ans += s[i] + " ";
    }
 process.stdout.write(ans);

