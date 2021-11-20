const http = require('http');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'asdf1234',
    database: 'poapper_backend'
});

const port = 8080;
const server = http.createServer((req, res) => {
    const method = req.method;
    if (req.url.split('/')[1] == '/isVegan') {
        db.query(`SELECT * from foods where isVegan = true;`, (err, results) => {
            if (err) throw err;
            res.write(JSON.stringify(results));
            console.log(results);
            res.end();
        })

    }
    if (method == 'GET') {
        const query_id = (req.url.split('/')[1]);
        if (isNaN(Number(query_id)) || query_id == '') {
            db.query(`SELECT * from foods;`, (err, results) => {
                if (err) throw err;
                res.write(JSON.stringify(results));
                console.log(results);
                res.end();
            })
        } else {
            db.query(`SELECT * from foods where id = ${Number(query_id)};`, (err, results) => {
                if (err) throw err;
                res.write(JSON.stringify(results));
                console.log(results);
                res.end();
            })
        }
    } else if (method == 'DELETE') {
        const query_id = (req.url.split('/')[1]);
        if (!isNaN(Number(query_id)) && query_id != '') {
            db.query(`DELETE from foods WHERE id = ${Number(query_id)};`, (err, results) => {
                if (err) throw err;
                res.end();
            });
        }
    }

    req.on('data', data => {
        console.log(`Data available: ${data}`);
        const body = JSON.parse(data);
        if (method == 'PUT') {
            const query_id = Number(req.url.split('/')[1]);
            db.query(`UPDATE foods SET name = '${body.name}', kcal=${body.kcal}, isVegan=${body.isVegan} WHERE id = ${query_id};`, (err, results) => {
                if (err) throw err;
                res.end();
            });

        } else if (method == 'POST') {
            db.query(`INSERT INTO foods (name, kcal, isVegan) VALUES ('${body.name}', ${body.kcal}, ${body.isVegan});`, (err, results) => {
                if (err) throw err;
                res.end();
            });
        }
    })
});

server.listen(8080, () => {
    console.log(`server is running on port:${port}`);
});