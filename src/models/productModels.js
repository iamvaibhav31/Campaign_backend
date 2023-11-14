import mongoose from "mongoose";
import { modelsName } from "../utils/constants.js";
import imageSchema from "./imageModel.js";


const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: imageSchema,
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model(modelsName.PRODUCTS, productSchema);
