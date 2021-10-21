import express from "express"
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
    await newsignup.save()
    .then((ress)=>{res.send({msg:"signup successfull"})})
    .catch((err)=>{res.send("some technical error")})
})

app.get("/datafromdatabase",async(req,res)=>{
    // console.log(req)
    const data=await simpleSignUp.find({})
    res.send(data)
})

app.post("/userLogin",async(req,res)=>{
    const {email,password}=req.body;
   const data= await simpleSignUp.findOne({"emai":email})
   if(data)
   {
    //    console.log(password,data.password)
       if(data.password==password)
       {
           res.send({login:true})

       }
       else
       {
           res.send({login:false,msg:"password not matched"})
       }
      
   }
   else
   {
       res.send({login:false,msg:"email not matched"})
   }

})

app.listen(port,()=>{console.log(`server is running on port ${port}`)})