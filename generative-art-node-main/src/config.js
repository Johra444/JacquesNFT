const layersOrder = [
    { name: 'fond', number: 7 },
    { name: 'le goat', number: 1 },
    { name: 'main', number: 9 },
    { name: 'face', number: 7 },
];
  
const format = {
    width: 1500,
    height: 1500
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 441;

module.exports = { layersOrder, format, rarity, defaultEdition };