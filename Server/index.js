const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const db = mysql.createPool({
    host: "sql3.freemysqlhosting.net",
    user: "sql3498971",
    password: "eA3ggtkxM2",
    database: "sql3498971"
});


app.get('/', (req, res) => {
    //const sqlInsert = "INSERT INTO `user` (`id`, `nome`, `email`, `timestamp`) VALUES (NULL, 'pp', 'ppp', CURRENT_TIMESTAMP);";
   // db.query(sqlInsert, (err, result)=>{
        res.send("Hello");
    //    console.log(result);
    //    console.log(err);
    //});
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/usuarios', (req, res) => {
    const sqlSelect = "SELECT * FROM user;";
    db.query(sqlSelect, (err, result)=>{
        res.send(result);
    //    console.log(result);
    //    console.log(err);
    });
});

app.post('/api/insert', (req, res) =>{
    const nomeName = req.body.nomeName;
    const emailName = req.body.emailName;
    const sqlInsert = "INSERT INTO user (id, nome, email, timestamp) VALUES (NULL, ?, ?, CURRENT_TIMESTAMP);";
    db.query(sqlInsert, [nomeName, emailName],  (err, result)=>{
        console.log(result);
        console.log(err);
    });
    res.end();
});

app.post('/api/update', (req, res) =>{
    const id = req.body.id;
    const nomeName = req.body.nomeNameUpdate;
    const emailName = req.body.emailNameUpdate;
    const sqlInsert = "UPDATE user SET nome = ?, email = ? WHERE user.id = ?;";
    db.query(sqlInsert, [nomeName, emailName, id],  (err, result)=>{
        console.log(result);
        console.log(err);
    });
    res.end();
});

app.post('/api/delete', (req, res) =>{
    const id = req.body.id;
    const sqlInsert = "DELETE FROM user WHERE id = ?";
    db.query(sqlInsert, [id],  (err, result)=>{
        console.log(result);
        console.log(err);
    });
    res.end();
});

app.listen(3001, () =>{
    console.log('server 3001');
});