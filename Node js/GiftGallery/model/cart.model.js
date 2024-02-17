import pool from "../connection/connection.js";

class Cart {
    constructor(id, user_id) {
        this.id = id;
        this.user_id = user_id;
    }

    static isCartExist(user_id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) reject(err)
                else {
                    let sql = "select * from cart where user_id = ? ";
                    con.query(sql, [user_id*1], (err, result) => {
                        con.release();
                        err ? reject(err) : resolve(result);
                    })
                }
            })
        })
    }


    static createcart(user_id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "insert into cart(user_id) values(?)"
                    con.query(sql, [user_id*1], (err, result) => {
                        if(err)
                        reject(err)
                        else{
                            let sql = "select * from cart where user_id=?";
                            con.query(sql,[user_id],(err,result)=>{
                                err? reject(err) : resolve(result);
                                con.release();
                            })
                        }
                    })
                }
            })
        })
    }


}

export default Cart;