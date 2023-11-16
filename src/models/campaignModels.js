import mongoose from "mongoose";
import { modelsName } from "../utils/constants.js";


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
      required: [true , "Please select Product for campaign"],
    },
    noofclicks: {
      type: Number,
      default:0
    },
    budget: {
      type: Number,
      default: 0,
      required: [true , "Please select budget for campaign"],
    },
    location: {
      lat: {
        type: Number,
        required: true,
      },
      lon: {
        type: Number,
        required: true,
      },
    },
    range:{
      start: {
        type: Date,
        required: true,
      },
      end: {
        type: Date,
        required: true,
      },
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


// name: "", 
// desc: "",
// budget: 0,
// radius: 0,
// platform: "",
// range: {},
// location: {},
// productID: ""