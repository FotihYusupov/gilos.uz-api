import { Router } from "express";
import controllers from "./controllers.js";

const adminRoutes = Router()

export default adminRoutes
    .post('/login', controllers.LOGIN)