const express = require("express");
const { validate } = require("express-validation");
const { loginUser } = require("../controllers/usersController");

const { loginRequestSchema } = require("../schemas/userSchemas");

const router = express.Router();

router.post("/login", validate(loginRequestSchema), loginUser);

module.exports = router;
