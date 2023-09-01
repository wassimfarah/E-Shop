import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js"


// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

// @desc Fetch a product
// @route GET /api/products/:id
// @access Public
const getProductsById = asyncHandler(async (req, res) => {
    const product= await Product.findById(req.params.id)
    
    if (product){
        res.json(product)
    }else{
        res.status(404);
        throw new Error('Resource not found');
    }
})

export {getProducts, getProductsById}