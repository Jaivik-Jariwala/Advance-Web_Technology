const http=require("http")
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    console.log(req.headers);
    res.end('hello, world!\n');
})

const port = 3001
server.listen(port, () =>{
    console.log('server listening at http://localhost:${port}');
})