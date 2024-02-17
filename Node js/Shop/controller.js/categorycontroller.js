
import { response } from "express";
import Category from "../model/category.model.js";

export const savecategory = (request,response,next)=>{
    let category_name = request.body.category_name;
    
    let category = new Category(null,category_name);

    category.savecategory().then(result=>{
        return response.status(200).json({message:"Category Added successfully..."})
    }).catch(err=>{
        console.log(err+"Yaha par error hai");
        return response.status(500).json({error:"Internal server error"})
    })
    
}

export const categorylist = (request,response,next)=>{
    Category.categorylist().then(result=>{
        return response.status(200).json({Data: result})
    }).catch(err=>{
        return response.status(401).json({error: "Internal Server Error"})
    })
}

export const getcategorybyId = (request,response,next)=>{
    let categoryId = request.params.categoryId;
    Category.getcategorybyId(categoryId)
    .then(result=>{
        if(result.length !=0){
            return response.status(200).json({Category:result[0]})
        }else{
            return response.status(401).json({message:"Category not exist"})
        }
    }).catch(err=>{
        return response.status(500).json({error: "Internal server error"});
    })
}

export const deletebyId = (request,response,next)=>{
    let categoryId = request.params.categoryId;
    Category.deletebyId(categoryId)
    .then(result=>{
        if(result.length !=0){
            return response.status(200).json({message:"Category delete successfully..."})
        }else{
            return response.status(401).json({message:"Category is already not exist"})
        }
    }).catch(err=>{
        return response.status(500).json({error: "Internal server error"});
    })
}

export const categoryupdatebyId = (request,response,next)=>{
    console.log("Rahul Vishwakarma");
    let categoryId = request.body.categoryId;
    let category_name = request.body.category_name;

    let category = new Category(categoryId,category_name);

    category.categoryupdatebyId()
    .then(result=>{
        if(result.length !=0){
            return response.status(200).json({message:"Category update successfully..."})
        }else{
            return response.status(401).json({message:"Category is  not exist"})
        }
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal server error"});
    })
}
