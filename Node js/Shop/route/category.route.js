import express from "express"
import { savecategory,categorylist,getcategorybyId,deletebyId,categoryupdatebyId } from "../controller.js/categorycontroller.js";
const router = express.Router();

router.post("/save",savecategory);

router.post("/list",categorylist);

router.post("/update",categoryupdatebyId);

router.post("/:categoryId",getcategorybyId);

router.delete("/:categoryId",deletebyId);


export default router;