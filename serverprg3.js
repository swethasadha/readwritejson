const http=require('http');
const hostname='127.0.0.1';
const port=9090;
const server =http.createServer((req,res)=>
{
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
res.end('welcome');
});
server.listen(port,hostname,()=>{
console.log(`Server running at http://${hostname}:${port}/`);
console.log("hello world ");
});