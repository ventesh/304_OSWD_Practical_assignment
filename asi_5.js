//5.Write a program to create a compressed zip file for a folder.

var fs = require('fs')
var zlib = require('zlib')

fs.createReadStream('./text.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./text.txt.gz'));

console.log('File compressed..!!');