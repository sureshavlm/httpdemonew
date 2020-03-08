
const http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, { 'content-type': 'text/plain' });
	res.write("Http Server Demo");
	res.end();
}).listen(3000, function() {
	console.log('Server started on port 3000');
});