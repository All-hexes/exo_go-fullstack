const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilaye la rayponse du premiay sayrveur !');
});

server.listen(process.env.PORT || 3000);