
const mongoose=require('mongoose')

const ProductSchema=mongoose.Schema({
    Name:{
        type:String,
        // required:[true,"Please enter Product name"]
    },
    Description:{
       type:String,
    //    required:[true,"Please enter Product description"]
        
    },
    LongDescription:{
        type:String,
        // required:[true,"Please enter Product long decription"]
    },
    Attributes:{
        type:String,
        // required:[true,"Please enter Product attributes"]
    },
    Price:{
        type:Number,
        // required:[true,"Please enter Product price"]
    },
    SalePrice:{
        type:Number,
        // required:[true,"Please enter Product saleprice"]
    },
    Stock:{
        type:Number,
        // required:[true,"Please enter products in stocks"]
    },
    Images:{
        type:String,
        // required:[true,"Please enter Product images"]
    },
    Tax:{
        type:Number,
        default:5
    },
    Category:{
        type:String,
        // required:[true,"Please enter Product category"]
    }

})

module.exports=mongoose.model("Product",ProductSchema)