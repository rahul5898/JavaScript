// import express, { request } from 'express';
// import bodyParser from 'body-parser';
// import obj from './connection1.js'

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var product = obj.list; 

// for(let item of product.products){
//     console.log(item);
// }
import express, { request } from "express";
import bodyParser from "body-parser";
import obj from "./connection1.js";
const app  = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const PORT = 2000;

var product = obj.list.products;
var pool = obj.pool;

app.post("/category",(request,response,next)=>{
    pool.getConnection((err,con)=>{
        if(!err){
            for(let item of product){
                let sql = "insert into category(Category_name) values(?);"
                con.query(sql,[item.category],(err,result)=>{
                    if(err)
                    return response.status(400).json({error: 'Internal server error'})
                    else
                    return response.status(200).json({message:'Insert Successful....'})
                })
            }
        }
        else{
            console.log('Connection failed.....');
        }
    })
})