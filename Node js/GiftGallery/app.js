import bodyParser from "body-parser";
import express from "express";
import AdminRouter from "./route/admin.route.js";
import userRouter from "./route/user.route.js";
import categouryRouter from "./route/category.route.js"
import productRounter from "./route/product.route.js"
import cartRouter from "./route/category.route.js"
import path from "path";
import orderRouter from "./route/order.route.js"
import deliveryRouter from "./route/delivery.route.js"
import deliveryBoyRouter from "./route/deliveryBoy.route.js"
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"public")));

app.use("/admin",AdminRouter);
app.use("/user",userRouter);
app.use("/category",categouryRouter)
app.use("/product",productRounter)
app.use("/cart",cartRouter);
app.use("/order",orderRouter)
app.use("/delivery",deliveryRouter)
app.use("/deliveryBoy",deliveryBoyRouter)

app.listen(3000,()=>{
    console.log("server started...");
});

