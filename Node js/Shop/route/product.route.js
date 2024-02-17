import express from 'express';
import { addproduct, allproduct, deletebyId } from '../controller.js/productcontroller.js';
import multer from 'multer';
import { verifytoken } from '../Middleware/auth.js';

const upload = multer({dest: "public/images/"});


const route = express.Router();

route.post("/save",upload.single("imageURL"),addproduct);

// route.post("/save",addproduct);

route.post("/list",verifytoken,allproduct);

route.post("/remove",deletebyId);


export default route;