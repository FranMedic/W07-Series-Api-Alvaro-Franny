const { Joi } = require("express-validation");
Joi.objectId = require("joi-objectid")(Joi);

const platformSchema = {
  body: Joi.object({
    name: Joi.string().required(),
  }),
};

const updatePlatformSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    id: Joi.objectId().required(),
  }),
};

const deletePlatformSchema = {
  body: Joi.object({
    id: Joi.objectId().required(),
  }),
};

module.exports = {
  platformSchema,
  updatePlatformSchema,
  deletePlatformSchema,
};
