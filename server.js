// task 1 : making a nodejs server
const http=require("http")
const fs=require("fs")
const server = http.createServer((req, res) => {
    // task 3 : log the append of server 
    const currentDateTime = new Date();
    const log = `${currentDateTime.toISOString()} : New request received\n`;

    fs.appendFile("log.txt", log, (err, data) => {
        /*if (err) {
            console.error("Error writing to log file:", err);
        }*/

        switch(req.url) {
            case '/':
                //res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Homepage\n');
                const log = "homepage" ;
                break;
            case '/about':
                //res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('I am jffnjjh\n');
                break;
            default:
                //res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found\n');
        }
    });
});


    /*const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/plain'});

// task 2 : added headers module
    
    console.log(req.headers);
    res.end('hello, world!\n');
    })*/

const port = 3001
server.listen(port, () => {
    const currentDateTime = new Date();
    console.log(`Server listening at http://localhost:${port} - ${currentDateTime.toISOString()}`);
});