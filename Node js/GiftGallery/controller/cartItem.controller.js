import Cart from "../model/cart.model.js";
import CartItem from "../model/cartItem.model.js";


export const addTocart = (request,response,next)=>{
    let id = request.body.id;
    let cart_id = request.body.cart_id;
    let product_id = request.body.product_id;

    let cartitem = new CartItem(id,cart_id,product_id);

    cartitem.addTocart()
    .then(result=>{
       return response.status(200).json({message: "Cart Added Successfully"})
    })
    .catch(err=>{
       return response.status(400).json({message: "Internal server error"})
    })

    
}

export const remove = (request,response,next)=>{
   let id = request.body.id;

   CartItem.remove(id)
   .then(result=>{  
      return response.status(200).json({message: "Remove Cart Successfully"})
   })
   .catch(err=>{
      return response.status(400).json({error:"Internal Server Error"});
   })
}