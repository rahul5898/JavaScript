import express from 'express'
import { addproduct, productlist,productlistbycategory,removeproduct, saveInbulk } from '../controller/product.controller.js';
import multer  from 'multer';

const update = multer({dest: 'public/images/'})

const route = express.Router()

route.post("/save",update.single("imageURL"),addproduct);

route.post("/save-in-bulk",saveInbulk)

route.get("/view",productlist);

route.delete("/remove",removeproduct);

route.get('/viewbycategory',productlistbycategory)

export default route;