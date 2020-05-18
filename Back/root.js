const server = require('http')

const hostname = '127.0.0.1'
const port = 3030

const serverCreated = server.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('ContentType','text/plain');
	res.end('Server Alexendre')

})

serverCreated.listen(port, hostname, ()=> {
console.log("server is listenning");
})


