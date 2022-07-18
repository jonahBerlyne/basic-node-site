const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './public/about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, './public/contact-me.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, './public/404.html'));
});

app.listen(8080, () => console.log("Server running on port 8080..."));

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//  res.setHeader('Content-Type', 'text/html');

//  let path = './public/';

//  switch (req.url) {
//   case '/':
//    path += 'index.html';
//    res.statusCode = 200;
//    break;
//   case '/about':
//    path += 'about.html';
//    res.statusCode = 200;
//    break;
//   case '/contact-me':
//    path += 'contact-me.html';
//    res.statusCode = 200;
//    break;
//   default:
//    path += '404.html';
//    res.statusCode = 404;
//    break;
//  }

//  fs.readFile(path, (err, data) => {
//   if (err) {
//    if (err.code !== 'ENOENT') {
//     res.writeHead(500);
//     res.end(`Server Error: ${err.code}`);
//    }
//   } else {
//    res.end(data);
//   }
//  });
// });

// server.listen(8080, () => console.log("Server running on port 8080..."));