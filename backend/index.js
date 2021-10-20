import express from "express"
import  mongoose  from "mongoose"
import "./databaseConnect/connect.js"
import cors from "cors"
import simpleSignUp from "./instaBackend/models/simpleSignUp.js"
const app=express()
app.use(express.json())
const port=4001
app.use(cors())
app.post("/signup",async(req,res)=>{
    const {fullname,email,mobile,password,cpassword}=req.body
    const newUser={fullname,email,mobile,password,cpassword}
    const newsignup= new simpleSignUp(newUser)
    await newsignup.save().then((ress)=>{res.send({msg:"signup successfull"})}).catch((err)=>{res.send("some technical error")})
   



})
app.listen(port,()=>{console.log(`server is running on port ${port}`)})