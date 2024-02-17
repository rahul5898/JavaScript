import express from "express";
import bodyParser from 'body-parser';
import pool from './connection.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (request, response, next) => {
    response.write("Home Page");
    response.end();
})

app.get("/about", (request, response, next) => {
    response.write("About Page");
    response.end();
})

app.post("/add", (request, response, next) => {
    let a = request.body.a * 1;
    let b = request.body.b * 1;
    response.end("Addition : " + (a + b));
})

app.post("/signup", (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;
    let email = request.body.email;
    let age = request.body.age;


    pool.getConnection((err, con) => {
        if (!err) {
            let sql = "insert into testdb(username,email,age,password) values(?,?,?,?)"
            con.query(sql, [username, email, age, password], (err, result) => {
                if (err)
                    return response.status(401).json({ error: 'Bad request' });
                else
                    return response.status(200).json({ message: 'Signup success', data: { username, email, age } });
            });
            con.release();
        } else {
            console.log("Connection Failed......");
            console.log(err);
        }
    })
})

app.post("/signin", (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;

    pool.getConnection((err, con) => {
        if (!err) {
            let sql = "select * from testdb where email=? and password=?;";

            con.query(sql, [email, password], (err, result) => {
                if (err)
                    return response.status(500).json({ message: "Internal server error" })
                else if (result.length) {
                    console.log(result);
                    return response.status(200).json({ message: "Sign-In Success......" })
                }
                else {
                    return response.status(401).json({ message: "Unauthorized User....." })
                }
            })
        }
        else {
            console.log("Connection Failed.....");
        }
    })
})

app.post("/delete", (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;

    pool.getConnection((err, con) => {
        if (!err) {
            let sql = "delete from testdb where email=? and password=?";
            con.query(sql, [email, password], (err, result) => {
                if (err)
                    return response.status(500).json({ message: "Internal Server Error" })
                else if (result.length)
                    return response.status(200).json({ message: "Delete Account successfully...." })
                else
                    return response.status(401).json({ message: "Sorry This account is already not exit" })
            })
        }
        else
            console.log("Connection Failed....");
    })
})

app.post("/delete", (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;

    pool.getConnection((err, con) => {
        if (!err) {
            let sql = "delete from testdb where email=? and password=?";
            con.query(sql, [email, password], (err, result) => {
                if (err)
                    return response.status(500).json({ message: "Internal Server Error" })
                else if (result.length)
                    return response.status(200).json({ message: "Delete Account successfully...." })
                else
                    return response.status(401).json({ message: "Sorry This account is already not exit" })
            })
        }
        else
            console.log("Connection Failed....");
    })
})




app.use((request, response, next) => {
    console.log("app.use() is executed......");
    response.end("Bad request.....");
});

app.listen(3000, () => {
    console.log("Server started.......");
})