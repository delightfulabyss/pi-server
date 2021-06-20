const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');

const privateKey = fs.readFileSync('ssl/matthewwatman_com.crt');
const certificate = fs.readFileSync('ssl/matthewwatman_com.crt');
const credentials = {key: privateKey, cert: certificate}
const app = express();

const httpPort = process.env.PORT || 8080;
const httpsPort = process.env.PORT || 8443;


app.get('/', (req, res) => {
    res.json({ message: 'Received a get request' });
})
app.post('/', (req, res) => {
    res.json({ message: 'Received a post request' });
})
app.put('/', (req, res) => {
    res.json({ message: 'Received a put request' });
})
app.delete('/', (req, res) => {
    res.json({ message: 'Received a delete request' });
})

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(httpPort;
httpsServer.listen(httpsPort);
console.log('Listening on port')


