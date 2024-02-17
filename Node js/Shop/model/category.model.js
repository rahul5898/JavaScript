// import { response } from "express";
import pool from "../connection/connection.js";
// import { deletebyId } from "../controller.js/categorycontroller.js";

class Category {
    constructor(id, category_name) {
        this.id = id;
        this.category_name = category_name;
    }

    savecategory() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err)
                    // console.log("error hi error"+err);
                }
                else {
                    let sql = "insert into category(category_name) values(?)"
                    con.query(sql, [this.category_name], (err, result) => {
                        if (err) {
                            reject(err)
                            // console.log("yaha bhi error hai"+err);
                        }
                        else {
                            resolve(result)
                        }
                        con.release();
                    })
                }
            })
        })
    }

    static categorylist() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "select * from category";
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

    static getcategorybyId(categoryId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "select * from category where Id = ?";
                    con.query(sql, [categoryId * 1], (err, result) => {
                        if (err)
                            reject(err)
                        else if (result.length != 0)
                            resolve(result)
                        else
                            reject(err)
                        con.release();
                    })
                }

            })
        })
    }

    static deletebyId(categoryId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err)
                else {
                    let sql = "delete from category where Id = ?";
                    con.query(sql, [categoryId * 1], (err, result) => {
                        if (err)
                            reject(err)
                        else if (result.length != 0)
                            resolve(result)
                        else
                            reject(err)
                        con.release();
                    })
                }
            })
        })
    }

     categoryupdatebyId() {
        // console.log(categoryId);
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err){
                    reject(err)
                    console.log("yaha par error hai"+err);
                }
                else {
                    let sql = "update category set category_name = ? where Id=?";
                    con.query(sql, [this.category_name,this.id*1], (err, result) => {
                        if (err){
                            reject(err)
                            console.log("yaha par bhi error hai"+err);
                        }
                        else if (result.length != 0)
                            resolve(result)
                        else{
                            reject(err)
                            console.log("bas yahi error hai"+err);
                        }

                        con.release();
                    })
                }
            })
        })
    }

}

export default Category;