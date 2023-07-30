const http = require('http');
const url = require('url');

const static= require('node-static');

const fileserver = new static.Server('./index2.html')

var server = http.createServer(function(req, res){
    req.addListener('end', function(){
        fileserver.serve(req, res);
    }).resume();
}).listen(8080);
console.log("Listening on port number 8080");