import jwt from "jsonwebtoken"
// import express from 'express'

export const verifytoken = (request,respones,next) =>{
    try {
        let token  = request.headers.authorization;
        console.log(token)
        token = token.split(" ")[1];
        console.log(token);
        jwt.verify(token,'blablabrabla')
        next()
        
    } catch (error) {
        console.log(error);
        return respones.status(500).json({message: 'Unauthorized user access...'})
    }
}