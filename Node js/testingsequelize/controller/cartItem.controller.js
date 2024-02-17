import { response } from "express";
import cartItem from "../model/cartItem.model.js";
import cart from '../model/cart.model.js'
import sequelize from "../dbconnection/connection.js";
import product from "../model/product.model.js";

export const addTocart = async (request, response, next) => {
    let transaction = await sequelize.transaction();
    try {

        // let userId = request.body.userId;
        // let productId = request.body.productId;
        let { userId, productId } = request.body;
        console.log(userId);

        let res = await cart.findOne({ where: { userId: userId } })

        if (res) {
            let isExists = !! await cartItem.findOne({ raw: true, where: { cartId: res.id, productId } });
            if (isExists)
                return response.status(200).json({ message: "Product is already added in cart" });

            await cartItem.create({ cartId: res.id, productId }, { transaction });
            await transaction.commit();
            return response.status(201).json({ message: 'Product successfully added into cart' });

            //     let cartId = result.id;
            //     console.log(cartId);
            //     cartItem.create({
            //         cartId : cartId,
            //         productId : productId,
            //         quantity : request.body.quantity
            //     })
            //     .then(res=>{
            //         return response.status(200).json({message:"Item saved in cartItem"})
            //     })
            //     .catch(err=>{
            //         return response.status(400).json({error: "Internal server error"})
            //     })
        } else {
            console.log("else")
            cart.create({ userId: userId }, { transaction })
                .then(async result => {
                    console.log(result)
                    let cartId = result.dataValues.id;
                    console.log(cartId);
                    cartItem.create({
                        cartId: cartId, productId: productId, quantity: request.body.quantity
                    }, { transaction })
                        .then(res => {
                            return response.status(200).json({ message: 'Item saved in cartItem' })
                        })
                    // await transaction.commit();
                })


        }
    } catch (error) {
        console.log("hi")
        await  transaction.rollback();
        console.log(error);
    }

}

export const cartItemlistbycart = (request, response, next) => {
    cart.findAll({
        include: [{
            model: cartItem,
            required: true
        }]
    })
        .then(result => {
            return response.status(200).json({ message: "CartItem list", data: result })
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" })
        })
}

export const fetchCartItems = (request,response,next)=>{
    let userId = request.params.fetchcartitems*1;
    console.log(userId);
    cart.findAll({raw: true, where:{userId: userId},
    include:[{model: product , required: true}]})
    .then(result=>{
      return response.status(200).json({data: result});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    });
    
}