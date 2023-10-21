const mongoose = require('mongoose');

const ProductSchema =   mongoose.Schema({
    name : {
        type:String,
        required:[true , "Please Enter Product Name"]
    },
    description:{
        type:String,
        requires:[true , "Please Enter Description"]
    },
    price : {
        type:Number,
        required:[true , "Please Enter Price"],
        maxLength:[8,"Price cannot exceed 8 fig"]
    },
    rating : {
        type:Number,
        defaut:0
    },
    images : [
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true , "Please Enter Product category"]
    },
    Stock:{
        type:Number,
        Default : 1,
        required:[true , "Please Enter product Stock"],
        maxLength:[4 , "Stock cannot exceed 1000"]
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    review:[
        {
            name:{
                type:String,
                required:true
            },
            rating :{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model("Product" , ProductSchema);