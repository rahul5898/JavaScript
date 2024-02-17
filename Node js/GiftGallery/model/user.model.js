import pool from "../connection/connection.js";

class User {
    constructor(id, username, email, contact, password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.contact = contact;
        this.password = password;
    }
    signup() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "insert into user(username,email,contact,password) values(?,?,?,?);";
                    console.log(this.username);
                    con.query(sql, [this.username, this.email, this.contact, this.password], (err, result) => {
                        if (err)
                            reject(err)
                        else {
                            resolve(result)
                            console.log(result);
                        }
                        con.release();
                    })
                }
            })
        })
    }
    signin() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "select * from user where username=? and password=?";
                    con.query(sql, [this.username, this.password], (err, result) => {
                        if (err)
                            reject(err)
                        else if (result.length != 0)
                            resolve(result)
                        else
                            reject(err)
                    })
                }
            })
        })
    }

    static userdetail(username, password) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "select * from user where username = ? and password = ?";
                    con.query(sql, [username, password], (err, result) => {
                        if (err)
                            reject(err)
                        else if (result.length != 0) {
                            resolve(result)
                        }
                        else
                            reject(err)
                    })
                }
            })
        })
    }

   static updateusername(id,username) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "update user set Username = ? where id = ?"
                    con.query(sql, [username,id], (err, result) => {
                        if (err)
                            reject(err);
                        else if (result.length != 0)
                            resolve(result);
                        else
                            reject(err);
                        con.release()
                    })
                }
            })
        })
    }

    static updatepassword(id,password) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "update user set Password = ? where id = ?"
                    con.query(sql, [password,id], (err, result) => {
                        if (err)
                            reject(err)
                        else if (result.length != 0)
                            resolve(result)
                        else
                            reject(err)
                        con.release()
                    })
                }
            })
        })
    }

   static updateemail() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "update user set email = ? where id = ?"
                    con.query(sql, [email, id], (err, result) => {
                        if (err)
                            reject(err)
                        else if (result.length != 0)
                            resolve(result)
                        else
                            reject(err)
                        con.release()
                    })
                }
            })
        })
    }
    
   static updatecontact(id,contact) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "update user set Username = ? where id = ?"
                    con.query(sql, [contact,id], (err, result) => {
                        if (err)
                            reject(err)
                        else if (result.length != 0)
                            resolve(result)
                        else
                            reject(err)
                        con.release()
                    })
                }
            })
        })
    }



}
export default User;