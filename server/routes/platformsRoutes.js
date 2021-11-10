const express = require("express");

const router = express.Router();

router.get("/", getPlatforms);

router.post("/", createPlatform);

router.put("/:idPlatform", updatePlatform);

router.delete("/:idPlatform", deletePlatform);
