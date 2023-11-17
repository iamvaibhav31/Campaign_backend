import { Router } from "express";
import {
  createCampaign,
  deleteCampaign,
  getAllCampaign,
  updateCampaignStatus
} from "../../controller/campaignController.js";

const campaignRoutes = Router();

campaignRoutes.get("/allCampaigns", getAllCampaign);
campaignRoutes.post("/createCampaign", createCampaign);
campaignRoutes.put("/updateCampaignStatus", updateCampaignStatus);
campaignRoutes.delete("/deleteCampaign", deleteCampaign);

export default campaignRoutes;
