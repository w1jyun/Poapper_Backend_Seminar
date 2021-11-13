const http = require('http');
const port = 8080;
let database = {};
let idx = 0;
console.log(database);

const server = http.createServer((req, res) => {
    const parsedURL = req.url.split('/');
    const method = req.method;
    console.log(method);
    console.log(parsedURL);
    res.write(method);

    if (method == 'POST') {
        database[idx++] = (parsedURL[1]);
        console.log(database);
        res.end();
    } else if (method == 'GET') {
        const index = Number(parsedURL[1]);
        if (database[index] != undefined && index <= idx && index >= 0) { // 해당 데이터가 undefined인 경우 또는 index가 범위를 벗어난 경우에는 실행 x
            res.write(database[index]);
            console.log(database[index]);
            console.log(database);
            res.end();
        }
    } else if (method == 'PUT') {
        const index = Number(parsedURL[1]);
        if (index <= idx && index >= 0) { // index가 범위를 벗어난 경우에는 실행 x
            database[index] = parsedURL[2];
            console.log(database);
            res.end();
        }
    } else if (method == 'DELETE') {
        const index = Number(parsedURL[1]);
        database[index] = undefined;
        console.log(database);
        res.end();
    }
    res.end();
});

server.listen(port);

server.on('listening', () => {
    console.log(`server is running (port:${port})`);
});

server.on('error', (err) => {
    console.log('error occured', err);
});