import express from 'express'
import { verifytoken } from '../Middleware/auth.js'
import { signup, signin, userlist, remove } from '../controller/user.controller.js';
import { body } from 'express-validator';

const  route = express.Router();

route.post("/save", body('name', 'Name is required').notEmpty(),body('name','Only alphabet allow').isAlpha(), body('email', 'email is required').notEmpty(), body('password', "Password is required").notEmpty(), body('password', 'At least 5 character').isLength({ min: 5 }), signup);

route.post("/signin", signin);

route.post("/list", userlist);

route.post("/remove", remove);

export default route;