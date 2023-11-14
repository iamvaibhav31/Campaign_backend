import mongoose from "mongoose";
import { modelsName } from "../utils/constants.js";
import imageSchema from "./imageModel.js";

const campaignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc:{
      type: String,
      required: true,
    },
    product_id:{
      type: mongoose.Schema.ObjectId,
      ref: modelsName.PRODUCTS,
    },
    images: imageSchema,
    noofclicks: {
      type: Number,
      required: true,
    },
    budget: {
      type: Number,
      default: 0,
    },
    location: {
      lat: {
        type: Number,
        required: true,
      },
      long: {
        type: Number,
        required: true,
      },
    },
    startingDate: {
      type: Date,
      required: true,
    },
    endingDate: {
      type: Date,
      required: true,
    },

    platform: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model(modelsName.CAMPAIGN, campaignSchema);
