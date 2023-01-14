import { Router } from "express";
import controllers from './controllers.js'
import adminControllers from '../admin/controllers.js'

const productRoutes = Router()

export default productRoutes
    .get('/products', controllers.GET_PRODUCTS)
    .get('/view/:name', controllers.GET_IMG)
    .get('/search/:name', controllers.SEARCH_PRODUCT)
    .get('/product/:id', controllers.GET_PRODUCT)
    .get('/categories', controllers.GET_CATEGORIES)
    .get('/by-categorie/:id', controllers.BY_CATEGORY)
    .post('/add-product', adminControllers.VERIFICATION ,controllers.ADD_PRODUCT)
    .put('/update-product/:id', adminControllers.VERIFICATION, controllers.UPDATE_PRODUCT)
    .delete('/delete/:id', adminControllers.VERIFICATION, controllers.DELTE_PRODUCT)