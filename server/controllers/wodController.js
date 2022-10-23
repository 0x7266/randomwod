const wods = require("../data/crossfitGirlsWods.json");

module.exports = {
  getWod: () => {
    let randomIndex = Math.floor(Math.random() * Object.keys(wods).length);
    let randomWod = wods[0].wods[0].girls[0];
    //console.log(randomWod);
    return randomWod;
  },
};
