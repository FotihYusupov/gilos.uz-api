import express from "express";
import dotenv from "dotenv"
dotenv.config()
import fileUpload from "express-fileupload";
import routes from "./modules/routes.js";

const PORT = process.env.PORT || 9090
const app = express()

app.use(fileUpload())

app.use(express.json())
app.use(routes)

app.listen(PORT, console.log(PORT))