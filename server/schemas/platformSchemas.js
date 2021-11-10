const { Joi } = require("express-validation");

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

module.exports = {
  platformSchema,
  updatePlatformSchema,
};
