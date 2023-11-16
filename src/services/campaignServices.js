import CampaignModel from "../models/campaignModels.js";
import imageSchema from "../models/imageModel.js";

const getAllCampaignServices = async (params, callback) => {
  try {
    const { page, limit, skip, query } = params;

    let campaigns = await CampaignModel
      .find(query)
      .skip(skip)
      .limit(Number(limit))

    const totalCount = await CampaignModel.countDocuments();

    return callback(false, {
      success: true,
      campaigns,
      page: Number(page),
      pages: Math.ceil(totalCount / limit),
      limit: Number(limit),
      totalCount,
    });
  } catch (error) {
    return callback({
      success: false,
      message: error?.message,
    });
  }
};

const createCampaignService = async (params, callback) => {
  try {
    const {
      name,
      desc,
      budget,
      noofclicks,
      location,
      range,
      platform,
      productID
    } = params;

    const campaign = new CampaignModel({
      name,
      budget,
      noofclicks,
      range,
      location,
      platform,
      desc,
      product_id:productID
    });

    await campaign.save();

    return callback(false, {
      success: true,
      campaign,
    });
  } catch (error) {
    return callback({
      success: false,
      message: error?.message,
    });
  }
};

const deleteCampaignService = async (params, callback) => {
  try {
    const { id } = params;

    await CampaignModel.deleteOne({ _id: id });

    return callback(false, {
      success: true,
      message: "Campaign Deleted Successfully",
    });
  } catch (error) {
    return callback({
      success: false,
      message: error?.message,
    });
  }
};

export {getAllCampaignServices, createCampaignService , deleteCampaignService};
