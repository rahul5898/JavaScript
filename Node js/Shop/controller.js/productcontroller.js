// import { response } from "express";
import Product from "../model/product.model.js";

export const addproduct = (request, response, next) => {
    console.log(request.file);
    let filename = request.file.filename;
    console.log(filename);
    let title = request.body.title;
    let brand = request.body.brand;
    let price = request.body.price;
    let description = request.body.description;
    let imageURL = "images/" + filename;
    let category_id = request.body.category_id;
                            // Id, title, brand, price, description, imageURL, category_id
    let product = new Product(null, title, brand, price, description, imageURL, category_id)

    product.addproduct()
        .then(result => {
            return response.status(200).json({ message: "product added successfully" })
        })
        .catch(err => {
            console.log(err);
            return response.status(400).json({ error: "Internal Server Error" })
        })
}

export const allproduct = (request, response, next) => {

    Product.allproduct()
        .then(result => {
            return response.status(200).json({ Productlist: result })
        })
        .catch(err => {
            return response.status(400).json({ error: "Internal Server Error" });
        })
}

export const deletebyId = (request, response, next) => {
    let product_id = request.body.product_id;

    Product.deletebyId(product_id)
        .then(result => {
            if (result.length != 0)
                return response.status(200).json({ message: "Product Delete Successfully" })
            else
                return response.status(400).json({ message: "Product is not exit" })
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" })
        })
}
