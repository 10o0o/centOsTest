const mysql = require('mysql');
const connection = mysql.createConnection({
    host : '192.168.0.212',
    user : 'root',
    password : '6087joO#124@',
    database : 'myTestDB'
});

connection.connect();

connection.query('SELECT * from Users', (err, rows, fields) => {
    if (err) throw err;
    console.log('User info is: ', rows);
});

connection.end();