const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//Register a User
exports.registerUser = catchAsyncError(async(req,res,next)=>{
    const {name , email , password} = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"sample  id",
            url:"p1.com",
        },
    });

    sendToken(user,200,res)
});


//Login User
exports.loginUser = catchAsyncError(async(req,res,next)=>{
    const {email , password} = req.body;
    //cheking if user given password and email
    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email and Password",400))
    }

    const user = await User.findOne({email}).select(+password);

    if(!user){
        return next(new ErrorHandler("Invalid email or password",401))
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password", 401));
    }

   sendToken(user,200,res)

})