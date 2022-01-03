const express = require('express');
const cookieParser = require('cookie-parser');

const _id = "poapper";
const _password = "pwd";

const app = express();

app.listen(8080, () => {
    console.log("server is running on 8080 port");
});

app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(req.cookies)
    res.sendFile(__dirname + "/view/index.html");
})

app.get('/login', (req, res) => {
    res.cookie('id', _id);
    res.cookie('password', _password);
    res.end();
})

app.post('/login', (req, res) => {
    const body = req.body;
    const query_id = body.id;
    const query_pw = body.password

    // 입력한 id와 pw가 동일해서 쿠키 발급
    if (query_id == _id && query_pw == _password) {
        console.log("Login success")
        res.cookie('id', _id);
        res.cookie('password', _password);
    } else {
        console.log("Login failed...")
    }
    res.redirect(301, "/");
})

app.get('/secret', (req, res) => {
    res.sendFile(__dirname + "/view/secret_file.html")
})

app.get('/secret', (req, res) => {
    const cookie_id = req.cookies.id;
    const cookie_pw = req.cookies.password;

    if (cookie_id == _id && cookie_pw == _password) {
        res.sendFile(__dirname + "/view/secret_file.html")
    } else {
        res.redirect(301, "/");
    }
})