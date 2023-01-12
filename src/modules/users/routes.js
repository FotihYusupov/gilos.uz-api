import { Router } from "express";
import controllers from "./controllers.js";

const userRoutes = Router()

export default userRoutes
    .post('/new-user', controllers.NEW_USER)