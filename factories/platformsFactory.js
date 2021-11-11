const { Factory } = require("fishery");
const ObjectID = require("bson-objectid");

const { lorem } = require("faker");

const factoryPlatforms = Factory.define(() => ({
  id: ObjectID(),
  name: lorem.words(2),
}));

const getFakePlatform = () => factoryPlatforms.build();
const getFakePlatforms = (total = 3) => factoryPlatforms.buildList(total);

module.exports = { getFakePlatform, getFakePlatforms };
