import express from 'express'
import bodyParser from 'body-parser'
import userroute from './route/user.route.js'
import categoryroute from './route/category.route.js'
import productroute from './route/product.route.js'
import cartroute from './route/cart.route.js'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,"public")));

app.use("/user", userroute);
app.use("/category",categoryroute);
app.use("/product", productroute);
app.use("/cart",cartroute)

app.listen(3000,()=>{
    console.log("Server started.....");
})