import { response } from "express";
import category from "../model/category.model.js";

export const addcategory = (request, response, next) => {
    category.create({
        categoryname: request.body.categoryname
    })
        .then(result => {
            return response.status(200).json({ message: 'Category Added Successfully' })
        })
        .catch(err => {
            console.log(err);
            return response.status(400).json({ error: 'Internal Server error' })
        })
}

export const update = (request, response, next) => {
    const categoryname = request.body.categoryname;
    category.update({ categoryname: categoryname }, { where: { Id: request.body.Id } })
        .then(result => {
            return response.status(200).json({ message: 'Update successfully' })
        })
        .catch(err => {
            console.log(err);
            return response.status(400).json({ err: 'Internal server error' })
        })
}

export const saveInbulk = (request, response, next) => {
    try {
        let categorylist = request.body;
        for (let categoryname of categorylist) 
            category.create({categoryname: categoryname})
        return response.status(200).json({message : "All category saved"})
    } catch (error) {
        return response.status(500).json({error : "Internal server error"})
    }
    
}

export const viewbycategory = (request,response,next)=>{
    category.findAll()
    .then(result=>{
        return response.status(200).json({message: "category list", data : result})
    })
    .catch(err=>{
        return response.status(400).json({error : 'Internal server error'})
    })
}