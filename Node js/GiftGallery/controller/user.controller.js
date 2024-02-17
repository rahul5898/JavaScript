import User from "../model/user.model.js"
import jwt from 'jsonwebtoken';

export const signup = (request, response, next) => {
    let username = request.body.username;
    let email = request.body.email;
    let contact = request.body.contact;
    let password = request.body.password;

    let user = new User(null, username, email, contact, password)

    user.signup().then(result => {
        return response.status(200).json({ message: "Signup Success" });
    }).catch(err => {
        return response.status(400).json({ error: "Internal server error" })
    })
}

export const signin = (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;

  
    let user = new User(null, username, null, null, password)



    
    user.signin().then(result => {
        let payload = {subject : username}
        let token = jwt.sign(payload,'sdjfejwifewijfwiefwiejfiwefi;weofweofjwefkwefwerahul');
        return response.status(200).json({ message: "Signin Success",data:result[0],token:token});
    }).catch(err => {
        return response.status(400).json({ error: "Internal server error" })
    })
}

export const userdetail = (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;

    User.userdetail(username, password)
        .then(result => {
            if (result.length != 0)
                return response.status(200).json({ Detail: result })
            else
                return response.status(400).json({ message: "Something went wrong" })
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal Server Error" })
        })
}

export const updateusername = (request, response, next) => {
    let id = request.body.id
    let username = request.body.username;

    User.updateusername(id, username)
        .then(result => {
            if (result.length != 0)
                return response.status(200).json({ message: "Userdetail Update Successfully" })
            else
                return response.status(400).json({ message: "Something went wrong" })
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" })
        })
}

export const updateemail = (request, response, next) => {
    let id = request.body.id;
    let email = request.body.id;

    User.updateemail(id,email)
        .then(result => {
            if (result.length != 0)
                return response.status(200).json({ message: "Userdetail Update Successfully" })
            else
                return response.status(400).json({ message: "Something went wrong" })
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" })
        })
}

export const updatepassword = (request, response, next) => {
    let id = request.body.id;
    let password = request.body.password;

    User.updatepassword(id,password)
        .then(result => {
            if (result.length != 0)
                return response.status(200).json({ message: "Userdetail Update Successfully" })
            else
                return response.status(400).json({ message: "Something went wrong" })
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" })
        })
}

export const updatecontact = (request, response, next) => {
    let id = request.body.id;
    let contact = request.body.contact;

    User.updatecontact(id,contact)
        .then(result => {
            if (result.length != 0)
                return response.status(200).json({ message: "Userdetail Update Successfully" })
            else
                return response.status(400).json({ message: "Something went wrong" })
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" })
        })
}




