const mongoose = require('mongoose');
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required:[true , "Please Enter Your Name"],
        maxLength : [30 , "Name cannot exceed 30 character"],
        minLength : [5 , "Name should be more than 4 character"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Password"],
        unique:true,
        validator:[validator.isEmail , "Please Enter valid Email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter Your password"],
        minLength:[8 , "Password should be more than eight character"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
})

console.log("suceess")
module.exports = mongoose.model("User",userSchema)
