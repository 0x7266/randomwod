const wods = require("../data/wods.json");

module.exports = {
  getWod: () => {
    let randomIndex = Math.floor(Math.random() * Object.keys(wods).length);
    let randomWod = wods[randomIndex];
    //console.log(randomWod);
    return randomWod;
  },
};
