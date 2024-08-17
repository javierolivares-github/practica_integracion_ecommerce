import { logger } from "../utils/logger.js";

const loggerTest = async (req, res) => {
  try {
    logger.log("info", `Este es el nivel info.`);
    logger.log("warn", `Este es el nivel warning.`);
    logger.log("error", `Este es el nivel error.`);
    res.status(201).json({ status: "success", msg: "Logger activated" });
  } catch (error) {
    logger.log("error", error);
    res.status(500).json({ status: "Error", msg: "Internal Server Error" });
  }
};

export default {
  loggerTest
};