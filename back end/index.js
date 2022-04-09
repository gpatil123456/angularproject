//database conn
//app.use(express.json())

const express = require('express');
const mysql = require('mysql');
var app = express()

// var assert = require('assert');
app.use(express.json())

//var cors = require('cors');
var cors = require('cors')
app.use(cors())





//app.use('cors()');

//const bodyParser = require('body-parse'); //text value gena sadi
//var app = express()

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'd4'

})

con.connect((err) => {
    if (!err)
        console.log('db connected done');
    else
        console.log('error');
});
//con.connect((err) => {

//         if (!err)
//             console.log("database connected");
//         else
//             console.log("error");
//     })
// con.connect(function(err) {

//     if (err) throw err;
//     console.log("connected");
//     con.query("create database db ", function(err, result) {
//         if (err) throw err;
//         console.log("created database");
//     });
// });
//});
//create database 
// con.connect(function(err) {

//         if (err) throw err;
//         console.log('connected');
//         con.query("create database d2", function(err, result) {
//             if (err) throw err;
//             console.log('create database');
//         })
//     })
//     // });

//create table user
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("connected");
//     var sql = "create table user(id int(11),username varchar(255),address varchar(255))";
//     con.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("create database");
//     });

// });
//insert value in table
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("connected");
//     var sql = "insert into user(id,username,address)values('01','gaurav','vichakhede'),('02','shubham','nagpur'),('03','arjun','pune')";
//     con.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("insert value");
//     })
// })
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("show console");
//     con.query("select * from user", function(err, result, fiels) {
//         if (err) throw err;
//         console.log(result);
//     })
// })
app.get("/user2", (req, res) => {
    con.query("select * from user2", (err, row, fileds) => {
        if (!err)
        // res.end(JSON.stringify(row));
            res.send(row);
        else
            console.log(err);
    })
})
app.get('/user2/:id', (req, res) => {
        con.query("select * from user2 where id=?", [req.params.id], (err, row, fileds) => {
            if (!err)
                res.end(JSON.stringify(row));
            //  res.send(row);
            else
                console.log(err);

        })
    }) *
    //  delete dynmaically ** * * /
    app.delete('/user2/:id', (req, res) => {
        con.query("delete from user2 where id=?", [req.params.id], (err, row, fileds) => {
            //if (err) throw err;
            if (!err)
                res.end(JSON.stringify(row));
            // res.send(row)
            // res.send("deleted sucessfully");
            else
                console.log(err);
        })
    })
    // app.put("/", (req, res) => {

//     res.send("put");
// });
//static
//http://localhost//4000
// app.put('/', (req, res) => {
//         const data = ["rahul", "vichakhede", "3000", 2];
//         con.query("update user1 set name=?,address=?,salary=? where id=?", data, (err, result, fileds) => {
//             if (err)
//                 throw err;
//             res.send("update data successfully");

//         })
//     })
//dynamically data 
//http://localhost:4000/user1/id konti pn
// var unchange;
app.put("/user2/:id", (req, res) => {
        const data = [req.body.name, req.body.address, req.body.salary, req.params.id]
        con.query("update user2 set name=?,address=?,salary=? where id=?", data, (err, result, fileds) => {
            if (err) throw err;
            // unchange = result;
            res.end(JSON.stringify(result));

            //res.send("update successfully");
        })
    })
    // process.on('exit', function() {

//         assert.equal(unchange.affectedRows, 1);
//         assert.equal(unchange.message, "(Row Matched:1 Changed:1,Warnings:0");
//     })
//http://localhost:4000/user1
// app.post("/user2", (req, res) => {
//         const data = [5,
//             "rajesh ",
//             "ahemdnagar ",
//             5000
//         ]
//         con.query("insert into user1 set id=?,name=?,address=?,salary=?", data, (err, data, result) => {
//             if (err) throw err;
//             res.send("insert datasucceccfully");
//})
//})
//http://localhost:4000/user1
app.post("/user2", (req, res) => {
    const data = [req.body]
    con.query("insert into user2 set?", data, (err, result, fileds) => {
        if (err) throw err;
        res.end(JSON.stringify(result)); //res.send("insert data successfully")
    })
})
app.listen(4000, () => console.log("server 4000 create"))