var http = require('http');
var fs = require('fs');

const server1  =http.createServer((req, res)=>{

});

var server = http.createServer(function(req,res){
    console.log("recvied url: " + req.url);
    
    if(req.url=="/process" && req.method==='POST')
    {
        let body='';
        req.on('data' , chunk => {
            body=chunk.toString();
        });
        req.on('end',() => {
            console.log(body);
            res.end('Okay ==> ' + body);
        });
        // res.write("<html>");
        // res.write("Hello");
        // res.write("<br/>");
        // res.write("Hello1");
        // res.write("<br/>");
        // res.write("Hello2");
        // res.write("<html/>");
        // res.end();
    }else if(req.url=="/index.html" && req.method==='GET'){
        
        var filename = "./index.html";
        fs.readFile(filename, function(err,data){
            if(err){
                res.writeHead(404, {'contente-type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });


       
    }
    else if(req.url=="/list")
    {
        res.write("LIST");
        res.end();
    }
    else{
        res.write("Other Page...!!");
        res.end();
    }


});

server.listen(1010);
console.log("Done....!!");