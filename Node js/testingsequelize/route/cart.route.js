import express from 'express'
import { addTocart, cartItemlistbycart, fetchCartItems } from '../controller/cartItem.controller.js'
const route = express.Router();

route.post("/addtocart",addTocart);

route.post("/:fetchcartitems",fetchCartItems)

route.get("/viewbycart",cartItemlistbycart)

export default route;