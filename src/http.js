const http = require('http');
const server = http.createServer((request, response)=>{
response.writeHead(200, {
    'Content-Type': 'text/html'
});
response.end(`<h1>HelloXxxsss<h1><br>
    ${request.url}
    `);
});
server.listen(3000);
//