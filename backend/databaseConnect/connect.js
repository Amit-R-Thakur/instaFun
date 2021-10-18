import Mongoose from "mongoose"
Mongoose.connect("mongodb://localhost:27017/instaFun",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("database connected")})
.catch((err)=>{console.log(err)})