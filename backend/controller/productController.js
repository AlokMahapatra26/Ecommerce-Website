const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeature");

// Create Product -- Admin
exports.createProduct = catchAsyncError(
    async (req,res,next) => {
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