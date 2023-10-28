const catchAsyncError = require("./catchAsyncError");

exports.isAuthenticateUser = catchAsyncError(async(req,res,next)=>{
    const token = req.cookies;

    console.log(token)
})

