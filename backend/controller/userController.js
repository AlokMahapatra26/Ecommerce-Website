const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")

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
    //cheking if user given has password and email both
    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email and Password",400))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email or password",401))
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password", 401));
    }

   sendToken(user,200,res)

})

//Logout User

exports.logout = catchAsyncError(async(req,res,next)=>{

    res.cookie("token", null , {
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:"logged out succesfully"
    })
})

//Forgot password
exports.forgotPassword = catchAsyncError(async (req,res,next)=>{
    const user = await User.findOne({email:req.body.email});

    if(!user){
        return next(new ErrorHandler("User , not found" , 404))
    }

    //Get ResetPassword Token
    const resetToken = user.getResetPasswordToken();

    await user.save({validateBeforeSave:false});
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is : \n\n ${resetPasswordUrl} \n\n If you have not requested this email then please ignore it`;

    try{

        await sendEmail({
            email:user.email,
            subject: `Ecommerce Password Recovery`,
            message,
        });

        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`
        })

    }catch(error){
        user.resetPasswordToken = undefined,
        user.resetPasswordExpire = undefined

        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message , 500))
    }
})

//Get user Details
exports.getUserDetails = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user
    })
})

