const debug = require("debug")("series:platformcontroller");
const chalk = require("chalk");
const Platform = require("../../database/models/platform");

const getPlatforms = async (req, res) => {
  const platforms = await Platform.find();
  res.json(platforms);
};

const createPlatform = async (req, res, next) => {
  try {
    const platform = req.body;
    const newPlatform = await Platform.create(platform);
    debug(chalk.green("created item"));
    res.status(201).json(newPlatform);
  } catch (error) {
    error.code = 400;
    error.message = "Error Happened";
    next(error);
  }
};

module.exports = {
  getPlatforms,
  createPlatform,
};
