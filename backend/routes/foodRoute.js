import express from 'express';
import { addfood } from '../controllers/foodController';
import multer from 'multer';
const foodRouter=express.Router();

//image Storage engine
const storage =multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=>{
    return cb(null,`${Date.now()}${file.originalname}`)
  }

})

const upload=multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addfood)

export default foodRouter;