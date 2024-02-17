// import { response } from "express";
import Order from '../model/order.model.js'

export const placeorder = (request, response, next) => {
    let userId = request.body.userId;
    let productId = request.body.productId;
    let quantity = request.body.quantity;

    const order = new Order(null, userId, productId, quantity);

    order.placeorder()
        .then(result => {

        })
        .catch(err => {

        })

}