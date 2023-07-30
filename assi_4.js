const WebSocket = require('ws')

var http = require('http')

var url = require('url')

var st = require('node-static')

var fileserver = new st.Server('./index1.html')

var httpserver = http.createServer(function(request, response){
    request.on('end',function(){
        var get = url.parse(request.url, true).query;
        fileserver.serve(request,response);
    }).resume();
}).listen(2020,function(){
    console.log((new Date()) + 
       'server listening on port 2020');
});

const wss = new WebSocket.Server({server: httpserver});

wss.on('connection', function(ws){
    ws.send('hello client')

    ws.on('message', message => {
    console.log('Received message => ${message}')
    ws.send('I received:' + message)
    })

})