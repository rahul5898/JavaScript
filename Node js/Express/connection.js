import mysql from "mysql2";

const pool = mysql.createPool({
    user : 'root',
    password : 'root',
    host : 'localhost',
    database : 'college'
});

export default pool;