import express from "express";
import { signup, signin, userlist, deletebyId, userdetail } from "../controller.js/admincontroller.js";
const router = express.Router();

router.post("/signup",signup);

router.post("/signin",signin);

router.post("/alluser",userlist);

router.post("/delete",deletebyId)

router.post("/detail",userdetail)

// router.post("/category",category);

export default router;