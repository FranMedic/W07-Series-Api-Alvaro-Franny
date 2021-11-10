const express = require("express");
const cors = require("cors");
const debug = require("debug")("series:server");
const morgan = require("morgan");
const chalk = require("chalk");
const { notFoundHandler, generalErrorHandler } = require("../middleware/error");

const app = express();

const initializeServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.magentaBright(`Listen to port: ${port}`));
    });

    server.on("error", (error) => {
      debug(chalk.red("Error appeared"));
      if (error.code === "EADDRINUSE") {
        debug(chalk.red(`The port ${port} is already in use (╯°□°）╯︵ ┻━┻`));
        reject(error);
      }
    });
    resolve(server);
  });

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  debug(chalk.green("REQUEST ARRIVED ʕง•ᴥ•ʔง"));
  next();
});

app.use(notFoundHandler);
app.use(generalErrorHandler);

module.exports = { initializeServer };
