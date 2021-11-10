const debug = require("debug")("series:database");
const chalk = require("chalk");

const mongoose = require("mongoose");

const connectDB = () =>
  new Promise((resolve, reject) => {
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        // eslint-disable-next-line no-underscore-dangle
        delete ret._id;
      },
    });

    mongoose.connect(process.env.MONGODB_SERIES, (error) => {
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
