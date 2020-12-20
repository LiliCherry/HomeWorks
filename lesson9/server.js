const http = require("http");
const host = 'localhost';
const port = 8000;

var students = 'Students are empty on server';

const requestListener = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.writeHead(200);

    if (req.method === 'GET') {
        res.end(students);
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            const message = chunk.toString();
            if (message) {
                body += message;
            }
        });
        req.on('end', () => {
            console.log(body)
            students = body;
            res.end('ok');
        });
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});