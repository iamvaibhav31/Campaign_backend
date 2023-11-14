import express from "express";
import productRoutes from "./v1/productRoutes.js";
import campaignRoutes from "./v1/campaignRoute.js";

const routes = express.Router()

routes.use("/v1" ,productRoutes)
routes.use("/v1" ,campaignRoutes)

export default routes