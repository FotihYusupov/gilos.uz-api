import { addProduct, byCategory, deleteProduct, getCategories, getProduct, getProducts, searchProduct, updateProduct } from './model.js'
import fs from "fs"
import path from "path";

const host = 'http://localhost:9090/products/view/'

export default {
    GET_PRODUCTS: async (_, res) => {
        try {
            let products = await getProducts()
            products = products.map(product => {
                product.product_img = `${host}${product.product_img}`
                return product
            })
            res.status(200).json({
                status: 200,
                data: products
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    GET_PRODUCT: async (req, res) => {
        try {
            const { id } = req.params
            const foundProduct = getProduct(id)
            if(foundProduct){
                res.status(200).json({
                    status: 200,
                    data: foundProduct
                })
            } else {
                res.status(404).json({
                    status: 404,
                    message: 'Product not found'
                })
            }
        } catch (error) {
            console.log(error.message);
        }
    },
    GET_IMG: async (req, res) => {
        try {
            const { name } = req.params
            res.sendFile(path.resolve('uploads', name))
        } catch (error) {
            console.log(error.message);
        }
    },
    ADD_PRODUCT: async (req, res) => {
        try {
            const { product_img } = req.files;
            const {product_name, product_body, product_price, categorie_id} = req.body
            const fileName = Date.now() + product_img.name.replace(/\s/g, '')
        
            fs.writeFileSync(path.resolve('uploads', fileName), product_img.data)

            await addProduct(product_name, product_body, product_price, fileName, categorie_id)
        
            res.status(200).json({
                status: 200,
                message: 'new product added'
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    DELTE_PRODUCT: async (req, res) => {
        try {
            const { id } = req.params
            const deletedProduct = deleteProduct(id)
            res.status(200).json({
                status: 200,
                message: 'Product deleted'
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    UPDATE_PRODUCT: async (req, res) => {
        try {
            const { product_name, product_body, product_price, categorie_id } = req.body
            const { id } = req.params
            const { product_img } = req.files
            const fileName = Date.now() + product_img.name.replace(/\s/g, '')

            fs.writeFileSync(path.resolve('uploads', fileName), product_img.data)

            await updateProduct(product_name, product_body, product_price, fileName, categorie_id, id)

            res.status(200).json({
                status: 200,
                message: 'product updated'
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    SEARCH_PRODUCT: async (req, res) => {
        try {
            const { name } = req.params
            const product_name = '%' + name + '%'
            const data = await searchProduct(product_name)
            res.status(200).json({
                status: 200,
                data,
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    BY_CATEGORY: async (req, res) => {
        const { id } = req.params
        const data = await byCategory(id)
        res.status(200).json({
            status: 200,
            data
        })
    },
    GET_CATEGORIES: async (req, res) => {
        const data = await getCategories()
        if(data){
            res.status(200).json({
                status: 200,
                data
            })
        } else {
            res.status(400).json({
                status: 400,
                message: 'error'
            })
        }
    }
}