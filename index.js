const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./config.js');


const connection = mysql.createConnection(dbconfig);
const app = express();

app.set('port', 4000);

app.get('/', (req, res) => {
  res.send('homepage');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * from Users', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});