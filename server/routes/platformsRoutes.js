const express = require("express");
const { validate } = require("express-validation");
const {
  updatePlatformSchema,
  platformSchema,
  deletePlatformSchema,
} = require("../schemas/platformSchemas");

const router = express.Router();

router.get("/", getPlatforms);

router.post("/", validate(platformSchema), createPlatform);

router.put("/:idPlatform", validate(updatePlatformSchema), updatePlatform);

router.delete("/:idPlatform", validate(deletePlatformSchema), deletePlatform);
