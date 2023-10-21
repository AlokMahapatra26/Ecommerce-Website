const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
//CREATE PRODUCT -- Admin
exports.createProduct = catchAsyncError(
    async (req,res,next)=>{
        const product = await Product.create(req.body);
    
        res.status(201).json({
            success:true,
            product
        })
    }
)


//UPDATE PRODUCT -- Admin
exports.updateProduct = catchAsyncError(
    async(req , res , next) => {
        let product = Product.findById(req.params.id);
    
        if(!product){
            return next(new ErrorHandler("Product not found", 400))
        }
    
        product = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidator:true,useFindAndModify:false});
    
        res.status(200).json({
            success : true,
            product
        })
    }
)


//DELETE PRODUCT -- Admin

exports.deleteProduct = catchAsyncError(
    async(req , res , next) => {
        let product  = Product.findById(req.params.id);
    
        if(!product){
            return next(new ErrorHandler("Product not found", 400))
        }
    
        const deleteResult = await product.deleteOne();
    
        if(deleteResult.deletedCount === 0){
            res.status(500).json({
                success : false,
                message : "Product could not be deleted "
               
            })
        }
        
        res.status(200).json({
            success : true,
            message : "Product deleted successfully"
        })
    }
    
)

// GET ALL PRODUCTS
exports.getAllProducts = catchAsyncError(
    async (req, res) => {
        const products = await Product.find();  
       res.status(200).json(
          {
              success : true,
              products
          }
       )
      }
)
  

  //Get Product Details

  exports.getProductDetails = catchAsyncError(
    async(req , res , next) => {
    
        const product = await Product.findById(req.params.id);
    
        if(!product){
             return next(new ErrorHandler("Product not found", 400))
        }
    
        res.status(200).json({
            success : true,
            product
        })
      }
  )