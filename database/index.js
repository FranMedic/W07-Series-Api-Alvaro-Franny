const debug = require("debug")("series:database");
const chalk = require("chalk");

const mongoose = require("mongoose");

const connectDB = (seriesDB) =>
  new Promise((resolve, reject) => {
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        // eslint-disable-next-line no-underscore-dangle
        delete ret._id;
      },
    });

    mongoose.connect(seriesDB, (error) => {
      if (error) {
        debug(chalk.red("Error starting Database"));
        debug(chalk.red(error.message));
        reject();
        return;
      }
      debug(chalk.green("Connected to MongoDB Series Database"));
      resolve();
    });
  });

module.exports = connectDB;
