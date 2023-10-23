const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type:String,
        required:[true , "Please Enter product Name"],
        trim : true
    },
    description:{
        type : String,
        required:[true , "Please Enter product Description"]
    },
    price:{
        type:Number,
        required:[true , "please Enter product price"],
        maxLenght:[9 , "Price cannot exceed 8 character"]
    },
    rating : {
        type : Number,
        default : 0
    },
    images:[
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
        required:[true , "Enter category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter product Stcok"],
        maxLenght:[4,"Stock cannot exceed 4 character"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    review:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
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

module.exports = mongoose.model("Product",productSchema);