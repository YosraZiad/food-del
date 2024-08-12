import express from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


//app config

const app=express()
const port =4000


//middleware
app.use(express.json())
app.use(cors())
//db connection
connectDB();

//API endpoint
app.use("/api/food",foodRouter)

app.get("/" ,(req,res)=>{
  res.send("API Working")

})
app.listen(port,()=>{
console.log(`Server Started  http://localhost:${port}`);
  

})


// npm i mongoose
// npm i jsonwebtoken
// npm i cors
// npm i dotenv
// npm i nodemon
// npm i bcrypt
// npm i multer
// npm i validator

// npm i body-parser
// npm i stripe
// express