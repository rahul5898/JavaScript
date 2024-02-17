import express from 'express';
import { addToCart } from '../controller.js/cartcontroller.js';

const router = express.Router();

router.post("/addtocart",addToCart);

export default router;
