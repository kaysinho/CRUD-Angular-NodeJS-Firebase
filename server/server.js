const express = require('express');
const http = require('http');
const request = require('request');
const compression = require('compression');
const app = express();
const firebaseServer = 'https://cursos-b0929.firebaseio.com';
const port = 8080;


//server.listen(port);
console.log('::: Node.js server - Listening on port ' + port + ' :::');
console.log('::: Visit ' + 'http://localhost:' + port + '/ :::');

app.enable('trust proxy server');
app.use(function(req, res, next) {
    if (req.headers.host == 'localhost:8080') {
        next(); //localhost http
    } else {
        if (req.secure) {
            next(); // request was via https, so do no special handling
        } else {
            res.redirect('https://' + req.headers.host); // request was via http, so redirect to https
        }
    }

});
app.use(compression());

let server = http.createServer(app);

// Web server - serves the Client-side
var staticContent = __dirname + '/dist';
app.use('/', express.static(staticContent));
server.timeout = 1800000;

server.listen(port);
// Reverse proxy, pipes the requests/responses to/from MFP
app.use('', function(req, res) {
    var url = firebaseServer + req.originalUrl;
    console.log('Execute: ' + url);
    req.pipe(request[req.method.toLowerCase()](url))
        .on('response', (res)=>{}).pipe(res)
})