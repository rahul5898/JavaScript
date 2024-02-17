import express from 'express';
import bodyParser from 'body-parser';
import AdminRouter from './route/admin.route.js';
import UserRouter from './route/user.route.js'
import list from './connection/Json.js';
import CategoryRouter from './route/category.route.js';
import ProductRouter from './route/product.route.js';
import CartRouter from './route/cart.route.js';
import OrderRouter from './route/order.route.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/admin", AdminRouter);

app.use("/user", UserRouter);

app.use("/category", CategoryRouter);

app.use("/product", ProductRouter);

app.use("/cart", CartRouter);

app.use("/order",OrderRouter);

// app.use("/product",)

// var product = list;

// for(let item of product.products){
//     console.log(item);
// }


app.listen(3008, () => {
    console.log("Server Started.....");
})