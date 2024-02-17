import pool from "../connection/connection.js";
import { deletebyId } from "../controller.js/admincontroller.js";

class Product {
    constructor(Id, title, brand, price, description, imageURL, category_id) {
        this.Id = Id;
        this.title = title;
        this.brand = brand;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
        this.category_id = category_id;
    }

    addproduct() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "insert into product(prodcut_name,brand,price,description,image,category_id) values(?,?,?,?,?,?)";
                    con.query(sql, [this.title, this.brand, this.price, this.description, this.imageURL, this.category_id], (err, result) => {
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

    static allproduct() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "select * from product";
                    con.query(sql, (err, result) => {
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

    static deletebyId(product_id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "delete from product where Id = ?";
                    con.query(sql, [product_id], (err, result) => {
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

export default Product;