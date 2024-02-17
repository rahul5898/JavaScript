import { response } from "express";
import user from "../model/user.model.js";
import jwt from 'jsonwebtoken'
import { validationResult } from "express-validator";
import bcrypt from 'bcryptjs';


export const signup = (request, response, next) => {

  let error = validationResult(request)
  if (!error.isEmpty())
    return response.status(400).json({ error: error })

  // let originalpassword = request.body.password;
  // let saltkey = bcrypt.genSaltSync(10);
  // let encryptedpassword = bcrypt.hashSync(originalpassword, saltkey);
  // console.log(encryptedpassword);

  user.create({
    name: request.body.name,
    email: request.body.email,
    password: request.body.password
  })
    .then(result => {
      return response.status(200).json({ data: result, message: "User created.." })
    })
    .catch(err => {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" })
    })
}

export const signin = async (request, response, next) => {
  let email = request.body.email;
  let password = request.body.password;

  let currentuser = await user.findOne({ where: { email: email }, raw: true })
  if (currentuser) {
    if (user.checkPassword(password, currentuser.password)) 
      return response.status(200).json({ message: 'Sign In success....' })
    return response.status(401).json({ message: "Incorrect Password" })
    }
    return response.status(500).json({ error: 'Internal Server Error' })

  }

  export const userlist = (request, response, next) => {
    user.findAll()
      .then(result => {
        return response.status(200).json({ UserList: result })
      })
      .catch(err => {
        return response.status(400).json({ err: "Internal Server Error" })
      })
  }

  export const remove = (request, response, next) => {
    user.destroy({ where: request.body })
      .then(result => {
        if (result)
          return response.status(200).json({ message: 'User delete successfully...' })
        return response.status(400).json({ message: "User not exist" })
      })
      .catch(err => {
        return response.status(500).json({ err: "Internal Server Error" })
      })
  }
