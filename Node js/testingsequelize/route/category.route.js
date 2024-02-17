import express from 'express'
import { addcategory, update,saveInbulk, viewbycategory } from '../controller/category.controller.js';
const route = express.Router();

route.post("/save",addcategory);

route.post("/update",update);

route.post("/save-in-bulk",saveInbulk);

route.post("/viewbycategory",viewbycategory);

export default route;