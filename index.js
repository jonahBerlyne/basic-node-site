const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
 res.setHeader('Content-Type', 'text/html');

 let path = './public/';

 switch (req.url) {
  case '/':
   path += 'index.html';
   res.statusCode = 200;
   break;
  case '/about':
   path += 'about.html';
   res.statusCode = 200;
   break;
  case '/contact-me':
   path += 'contact-me.html';
   res.statusCode = 200;
   break;
  default:
   path += '404.html';
   res.statusCode = 404;
   break;
 }

 fs.readFile(path, (err, data) => {
  if (err) {
   if (err.code !== 'ENOENT') {
    res.writeHead(500);
    res.end(`Server Error: ${err.code}`);
   }
  } else {
   res.end(data);
  }
 });
});

server.listen(8080, () => console.log("Server running on port 8080..."));