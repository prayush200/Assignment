
const Product = require('../model/ProductModel')

exports.createProduct = async (req, res, next) => {
    const product = Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}

exports.getAllProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
}

exports.UpdateProduct = async (req, res, next) => {
    let product = Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            message: 'Product not found'
        })
    }
    else {
        product = await Product.findByIdAndUpdate(req.params.id,req.params.body,{new:true,runValidators:true,useFindAndModify:false})
        res.status(200).json({
            success: true,
            product
        })
    }
}

exports.DeleteProduct = async (req, res, next) => {
    let product = Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            message: 'Product not found'
        })
    }
    product = await Product.deleteOne()
    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
}



