//  const det = require('./secret');
//   console.table(det);
// // to export obj from secret #1
// const fs = require('fs');
// fs.writeFileSync('newFile.txt','hey hello');

// console.log(fs.readFileSync('newFile.txt','utf8'));
// const fs = require('fs');
// fs.appendFileSync('newFile1.txt','new content');
var n = 5;
var num = 1;
for(var i = 0;i<n;i++)
{
    for(var j = n-1;j>i;j--)
    {
        process.stdout.write(" ");
    }
    for(var k = 0; k < num; k++) {
        var line = num + "";
        process.stdout.write(line);
    }
    num += 2;
    process.stdout.write("\n");
}
