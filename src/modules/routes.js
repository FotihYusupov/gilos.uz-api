import { Router } from "express";
import adminRoutes from './admin/routes.js'
import productRoutes from './products/routes.js'
import userRoutes from './users/routes.js'


const routes = Router()

export default routes
    .use('/admin', adminRoutes)
    .use('/products', productRoutes)
    .use('/user', userRoutes)