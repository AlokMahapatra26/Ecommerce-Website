const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

exports.isAuthenticateUser = catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please Login to acess this resource", 401))
    }

    const decodedData = jwt.verify(token,"jsdjfhsidfjh32423h4982hwe98fhn38hr34nf3948fh38f83h");

    req.user = await User.findById(decodedData.id);

    next();
})

