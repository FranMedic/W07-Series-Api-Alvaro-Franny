const express = require("express");
const { validate } = require("express-validation");
// const bcrypt = require("bcrypt");
// const { default: ObjectID } = require("bson-objectid");
// const User = require("../../database/models/user");
const { loginUser } = require("../controllers/usersController");

const { loginRequestSchema } = require("../schemas/userSchemas");

const router = express.Router();
/* router.get("/", async () => {
  User.create({
    name: "FrannyAlvaro",
    username: "frannyalvaro",
    password: await bcrypt.hash("frannyalvaro", 10),
    isAdmin: true,
    series: [ObjectID()],
  });
}); */

router.post("/login", validate(loginRequestSchema), loginUser);

module.exports = router;
