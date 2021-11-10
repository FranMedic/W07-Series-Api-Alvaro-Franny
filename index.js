require("dotenv").config();
const connectDB = require("./database/index");
const { initializeServer } = require("./server/index");

const port = process.env.PORT ?? process.env.SERVER_PORT_SERIES ?? 9000;
const seriesDB = process.env.MONGODB_SERIES;

(async () => {
  try {
    await connectDB(seriesDB);
    await initializeServer(port);
  } catch (error) {
    process.exit(1);
  }
})();
