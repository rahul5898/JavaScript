import { escape } from 'mysql2'
import product from '../model/product.model.js'
import { response } from 'express'
import category from '../model/category.model.js'

export const addproduct = (request, response, next) => {
    let filename = request.file.filename;
    
    product.create({
        productname: request.body.productname,
        brand: request.body.brand,
        price: request.body.price,
        image: "images/"+filename,
        categoryId: request.body.categoryId
    })
        .then(result => {
            return response.status(200).json({ message: 'Add product successfully...' })
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal server error" })
        })
}

export const productlist = (request, response, next) => {
    product.findAll()
        .then(result => {
            return response.status(200).json({ Userlist: result })
        })
        .catch(err => {
            console.log(err);
            return response.status(400).json({ error: "Internal Server Error" })
        })
}

export const saveInbulk = async (request,response,next)=>{
    
    try {
    let productlist = request.body;

    for(let products of productlist){
     let {title,description,price,discountPercentage,rating,stock,thumbnail,brand} = products;
        let categoryName = products.category;
        let imageArray = "";
        for(let imageUrl of products.images)
        imageArray = imageArray+imageUrl+"";

        await product.create({title,description,price,discountPercentage,rating,stock,thumbnail,brand,categoryName,imageArray})

    }
    return response.status(200).json({message: 'Add product successfully....'})
    } catch (error) {
        console.log(error);
        return response.status(400).json({error: "Internal server error"})
    }

}

export const removeproduct = (request, response, next) => {
    product.destroy({ where: { id: request.body.id } })
        .then(result => {
            return response.status(200).json({ message: "Product Delete Successfully" })
        })
        .catch(err => {
            return response.status(400).json({ error: "Internal Server Error" })
        })
}

export const productlistbycategory = (request, response, next) => {
    category.findAll({
        include: [{
            model: product,
            required: true
        }]
    })
        .then(result => {
            return response.status(200).json({ message: "Product list", data: result })
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" })
        })
}