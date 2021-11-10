const { Joi } = require("express-validation");

const platformSchema = {
  body: Joi.object({
    name: Joi.string().required(),
  }),
};

module.exports = {
  platformSchema,
};
