import express from "express";
import { signup, signin, userdetail, updateusername, updatepassword, updateemail, updatecontact} from "../controller.js/usercontroller.js";
import { verifytoken } from "../Middleware/auth.js";


const route = express();

route.post("/signup",signup);

route.post("/signin",verifytoken,signin);

route.post("/detail",userdetail)

route.post("/updateusername",updateusername);

route.post("/udatepassword",updatepassword);

route.post("/updateemail",updateemail);

route.post("/updatecontact",updatecontact);


export default route;