
const express=require('express')

const{getAllProducts, createProduct, UpdateProduct, DeleteProduct}=require('../controller/ProductController')

const router=express.Router()

//GET
router.route("/product").get(getAllProducts)

//POST
router.route('/create').post(createProduct)

//PUT
router.route('/update/:id').put(UpdateProduct)

//
router.route('/delete/:id').delete(DeleteProduct)

module.exports=router