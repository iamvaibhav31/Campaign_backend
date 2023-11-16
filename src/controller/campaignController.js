import {
  createCampaignService,
  getAllCampaignServices,
  deleteCampaignService
} from "../services/campaignServices.js";
import ErrorHandles from "../utils/error.js";

const getAllCampaign = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      platform,
      startDate,
      endDate,
    } = req.query;
    let skip = (Number(page) - 1) * limit;
    let query = {};

    if (status) {
      query["status"] = status;
    }

    if (platform) {
      query["platform"] = platform;
    }

    if (startDate && endDate) {
      query["startingDate"]["$gte"] = startDate;
      query["startingDate"]["$lte"] = endDate;
    }

    await getAllCampaignServices(
      { page, limit, skip, query },
      (err, result) => {
        if (!err) {
          return res.status(200).json(result);
        } else {
          return next(new ErrorHandles(err?.message, httpStatus.BAD_REQUES));
        }
      }
    );
  } catch (error) {
    return next(new ErrorHandles(error?.message, httpStatus.BAD_REQUES));
  }
};

const createCampaign = async (req, res, next) => {
  try {
    await createCampaignService(req.body, (err, result) => {
      if (!err) {
        return res.status(201).json(result);
      } else {
        return next(new ErrorHandles(err?.message, 400));
      }
    });
  } catch (error) {
    return next(new ErrorHandles(error?.message, 400));
  }
};

const deleteCampaign = async (req, res, next) => {
    try {
      await deleteCampaignService(req.query, (err, result) => {
        if (err) {
          return next(new ErrorHandles(err?.message, 400));
        } else {
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      return next(new ErrorHandles(error?.message, 400));
    }
  };

export { createCampaign , getAllCampaign , deleteCampaign};
