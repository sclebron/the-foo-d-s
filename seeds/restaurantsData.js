const { Restaurants } = require("../models");

const restaurantsData = [
  {
    name: "Chopstix",
    type_id: 1,
  },
  {
    name: "Red Panda Cuisine",
    type_id: 1,
  },
  {
    name: "East Moon Express",
    type_id: 1,
  },
  {
    name: "Next Door",
    type_id: 2,
  },
  {
    name: "Lulu's Grill",
    type_id: 2,
  },
  {
    name: "Kate's Dinner",
    type_id: 2,
  },
  {
    name: "The Taco Shop",
    type_id: 3,
  },
  {
    name: "Pablo's Taqueria",
    type_id: 3,
  },
  {
    name: "Abuelita's Mexican Grill",
    type_id: 3,
  },
  {
    name: "Joe's Pizza",
    type_id: 4,
  },
  {
    name: "Mama's Kitchen",
    type_id: 4,
  },
  {
    name: "Panzano",
    type_id: 4,
  },
];

const seedRestaurants = () => Restaurants.bulkCreate(restaurantsData);

module.exports = seedRestaurants;
