import { response } from "express";
import Cart from "../model/cart.model.js"
import CartItem from '../model/cartItem.model.js'

export const addToCart = async (request, response, next) => {
    try {
        let user_id = request.body.user_id;
        let product_id = request.body.product_id;

        let result = await Cart.isCartExist(user_id);
        if (result.length) {
            let cartId = result[0].Id;
            await CartItem.addCartItem(cartId, product_id);
            return response.status(200).json({ message: 'Item add in cart' })
        }
        else {  
            let result = await Cart.createcart(user_id);
            let cartId = result[0].Id;
            console.log(cartId);
            await CartItem.addCartItem(cartId, product_id)
            return response.status(200).json({ message: 'Item add in cart' })
        }

    } catch (error) {
        return response.status(500).json({message: "Internal Server Error"})
    }

}

// let currentDate = new Date();

// // Get individual components of the date and time
// let year = currentDate.getFullYear();
// let month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
// let day = currentDate.getDate();
// let hours = currentDate.getHours();
// let minutes = currentDate.getMinutes();
// let seconds = currentDate.getSeconds();

// console.log(`Current Date and Time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
// console.log(year+""+month+""+day);
// console.log(hours+""+minutes+""+seconds);