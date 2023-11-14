import { createProductService , getAllProductsServices } from "../services/productServices.js";
import ErrorHandles from "../utils/error.js";

const getAllProducts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    let skip = (Number(page) - 1) * limit;
    let query = {};

    await getAllProductsServices(
      { page, limit, skip, query },
      (err, result) => {
        if (err) {
          return next(new ErrorHandles(err?.message, 400));
        } else {
          return res.status(200).json(result);
        }
      }
    );
  } catch (error) {
    return next(new ErrorHandles(error?.message, 400));
  }
};

const createProduct = async (req, res, next) => {
  try {
    await createProductService(req.body, (err, result) => {
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

export { getAllProducts, createProduct };
