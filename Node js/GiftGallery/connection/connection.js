import mysql2 from 'mysql2'

const pool = mysql2.createPool({
    user : 'root',
    password : 'root',
    host: 'localhost',
    database: 'gift_gallery'
});

export default pool;
