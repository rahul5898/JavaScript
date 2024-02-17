import express from 'express';
import {placeorder} from '../controller.js/ordercontroller.js'
const router = express.Router();

router.post("orderitem",placeorder);

export default router;