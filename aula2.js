const http = require('http');

http.createServer((request, response)=>{
    response.writeHead(200,{'Content-type':'text/plain'});
    response.write('Estudo Node \n');
    response.end();
}).listen(1337);