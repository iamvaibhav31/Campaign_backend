import { Router } from "express";
import {
  createCampaign,
  deleteCampaign,
  getAllCampaign,
} from "../../controller/campaignController.js";

const campaignRoutes = Router();

campaignRoutes.get("/allCampaigns", getAllCampaign);
campaignRoutes.post("/createCampaign", createCampaign);
campaignRoutes.delete("/deleteCampaign", deleteCampaign);

export default campaignRoutes;
