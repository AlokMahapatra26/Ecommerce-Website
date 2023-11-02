const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeature");

// Create Product -- Admin
exports.createProduct = catchAsyncError(
    async (req,res,next) => {
        req.body.user = req.user.id
        const product = await Product.create(req.body);
        res.status(201).json({
            success : true,
            product
        })
    }
)


// Get all products
exports.getAllProducts = catchAsyncError(
    async (req , res , next) => {

        const resultPerPage = 5;
        const apiFeature = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage)
        const products = await apiFeature.query;
        res.status(201).json({
            success:true,
            products
        })
    }
)


//Update product -- Admin
exports.updateProduct = catchAsyncError(
    async (req,res , next) => {
        let product =  await Product.findById(req.params.id);
    
        if(!product){
            return next(new ErrorHandler("Product not found" , 404))
        }
    
        product = await Product.findByIdAndUpdate(req.params.id, req.body , {new:true , runValidators : true , useFindAndModify:false});
    
        res.status(200).json({
            success:true,
            product
        })
    }
    
)

//Delete product --Admin 
exports.deleteProduct = catchAsyncError(
    async (req , res , next) => {
        let product = await Product.findById(req.params.id);
    
        if(!product){
            return next(new ErrorHandler("Product not found" , 404))
        }
    
        await product.deleteOne()
    
        res.status(200).json({
            success:true,
            message : "Product deleted "
        })
    
    }
    
)

//Get product Detail

exports.getProductDetails = catchAsyncError(
    async (req, res , next) => {
        let product = await Product.findById(req.params.id);
    
        if(!product){
            return next(new ErrorHandler("Product not found" , 404))
        }
    
        res.status(200).json({
            success:true,
            product
        })
    
    }
)

//Create  New Review or update the review
exports.createProductReview = catchAsyncError(async (req,res,next) => {

    

    const review = {
        user:req.user.id,
        name:req.user.name,
        rating:Number(req.body.rating),
        comment:req.body.comment,
        
    };

    const product = await Product.findById(req.body.productId)

    const isReviewed = product.review.find(rev => rev.user.toString()===req.user._id)

    if(isReviewed){
        product.review.forEach(rev => {
            if(rev.user.toString() === req.user._id.toString());
            rev.rating = rating,
            rev.comment=commnet

        })
    }else{
        product.review.push(review);
        product.numOfReviews = product.review.length;
    }

    let avg = 0;
   product.review.forEach(rev => {
        avg+=rev.rating;
    })
    product.rating = avg/product.review.length;

    await product.save({validateBeforeSave: false});

    res.status(200).json({
        success:true,
    })
})

//Get All Reviews of a product
exports.getAllReviews = catchAsyncError(async (req,res,next)=>{
    const product = await Product.findById(req.query.id);

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    res.status(200).json({
        success:true,
        review:product.review
    })
})

//Deleting Particular review
exports.deleteReview = catchAsyncError(async(req,res,next)=>{
    const product = await Product.findById(req.query.productId);

    if(!product){
        return next(new ErrorHandler("Product not found",404))
    }

    const review = product.review.filter(rev => rev._id.toString() !== req.query.id.toString())

    
    let avg = 0;
   review.forEach(rev => {
        avg+=rev.rating;
    })
    const rating = avg/review.length;

    const numOfReviews = review.length;

    await Product.findByIdAndUpdate(req.query.productId, {
        review,
        rating,
        numOfReviews
    } ,{new : true , runValidators:true, useFindAndModify:false} )

    res.status(200).json({
        success: true,
    })
})