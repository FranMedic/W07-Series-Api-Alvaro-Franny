require("dotenv").config();
const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT_SERIES ?? 9000;

(async () => {
  try {
    await initializeServer(port);
  } catch (error) {
    process.exit(1);
  }
})();
