const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
        validate:[validator.isEmail , "Please Enter valid Email"]
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

userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})

//JWT TOKEN
userSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id},"jsdjfhsidfjh32423h4982hwe98fhn38hr34nf3948fh38f83h" , {
        expiresIn:5
    })
};

//Compare password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports = mongoose.model("User",userSchema)
