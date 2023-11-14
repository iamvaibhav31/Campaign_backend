import productModels from "../models/productModels.js";
import imageSchema from "../models/imageModel.js";


const getAllProductsServices = async (params, callback) => {
  try {
    const { page=1, limit=10, skip, query } = params;

    let products = await productModels
      .find(query)
      .skip(skip)
      .limit(Number(limit))
    
      const totalCount = await productModels.countDocuments({});
      
    return callback(false, {
      success: true,
      products,
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

const createProductService = async (params, callback) => {
  try {
    const { name, price, image_base64 } = params;
    
    const product = new productModels({
      name,
      price,
      images:{
        url: image_base64,
      },
    });

    await product.save();

    return callback(false,{
      success: true,
      product,
    });
  } catch (error) {
    return callback({
      success: false,
      message: error?.message,
    });
  }
};

export { createProductService, getAllProductsServices };
