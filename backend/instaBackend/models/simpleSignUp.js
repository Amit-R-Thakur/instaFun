import  Mongoose  from "mongoose";
const SignUpSchema=new Mongoose.Schema({
    fullname:String,
    email:String,
    mobile:Number,
    password:String,
    cpassword:String
})
export default Mongoose.model("signup",SignUpSchema);