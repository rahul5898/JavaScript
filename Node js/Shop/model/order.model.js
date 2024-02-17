
import pool from "../connection/connection.js"

class Order{
    constructor(id,Order_date,Total_price,delevered,contact,userId,status){
        this.id  = id;
        this.Order_date = Order_date;
        this.Total_price = Total_price;
        this.delevered = delevered;0
        this.contact = contact;
        this.userId = userId;
        this.status = status;
    }
    orderPlaced(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
            if(err) reject(err)
            else{
                let sql = "insert into orderdata(Order_date,Total_Price,delevered,contact,userId,status) values(?,?,?,?,?)"
            con.query(sql,[this.Order_date,this.Total_price,this.delevered,this.contact,this.userId,this.status],(err,result)=>{
                err?reject(err):resolve(result);
            })
                }
           })
        })
    }
}

export default Order;