
import pool from "../connection/connection.js";

class Admin{
    constructor(id,email,password){
        this.id = id;
        this.email = email;
        this.password =password;
    }

    signup(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                reject(err)
                else{
                    let sql = "insert into admin(email, password) values(?,?)";
                    con.query(sql,[this.email,this.password],(err,result)=>{
                        err ? reject(err): resolve(result);
                        con.release();
                    });
                }
            })
        });
    }

    signin(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                reject(err)
                else{
                    let sql = "select * from admin where username=? and password=?";
                    con.query(sql,[this.username,this.password],(err,result)=>{
                        // err ? reject(err): resolve(result);
                        if(err)
                        reject(err);
                        else if(result.length != 0)
                        resolve(result)
                        else
                        reject(err)
                        con.release();
                    });
                }
            })
        });
    }

    static userlist() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "select * from user";
                    con.query(sql, (err, result) => {
                        if (err)
                            reject(err)
                        else
                            resolve(result)
                        con.release();
                    })
                }
            })
        })
    }

    static deletebyId(user_id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "delete from user where Id = ?";
                    con.query(sql, [user_id], (err, result) => {
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
}

export default Admin;