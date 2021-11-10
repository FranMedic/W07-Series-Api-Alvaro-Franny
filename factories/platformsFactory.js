const { Factory } = require("fishery");

const { lorem } = require("faker");

const factoryPlatforms = Factory.define(() => ({
  name: lorem.words(2),
}));

const getFakePlatform = () => factoryPlatforms.build();
const getFakePlatforms = (total = 3) => factoryPlatforms.buildList(total);

module.exports = { getFakePlatform, getFakePlatforms };
