import pool from "../connection/connection.js";

class CartItem {
    constructor(id, cart_id, product_id) {
        this.id = id;
        this.cart_id = cart_id;
        this.product_id = product_id;
    }

    static addCartItem(cartId,product_id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "insert into cartItem(cart_id,product_id) values(?,?)";
                    con.query(sql, [cartId,product_id*1], (err, result) => {
                        if (err)
                            reject(err)
                        else
                            resolve(result)
                        con.release()
                    })
                }
            })
        })
    }

    removecart(cartitem_id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                reject(err)
            else{
                let sql = "delete from cartItem where id = ?";
                con.query(sql,[cartitem_id],(err,result)=>{
                    if(err)
                    reject(err)
                    else
                    resolve(result)
                })
            }
            })
        })
    }
}

export default CartItem;