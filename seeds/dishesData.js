const { Dishes } = require("../models");

const dishesData = [
  {
    price: 16.0,
    name: "Ramen",
    image_file: "ramen.jpg",
    description: "Chicken ramen with vegetables.",
    restaurant_id: 1,
  },
  {
    price: 15.0,
    name: "Pho",
    image_file: "pho.jpg",
    description: "Vietnamese noodle soup.",
    restaurant_id: 1,
  },
  {
    price: 35.0,
    name: "Sushi Platter",
    image_file: "sushi-platter.jpg",
    description: "Chef's selection of sushi.",
    restaurant_id: 1,
  },
  {
    price: 9.0,
    name: "Orange Chicken",
    image_file: "orange-chicken.jpg",
    description: "Fried chicken coated in orange chili sauce.",
    restaurant_id: 2,
  },
  {
    price: 12.0,
    name: "Chicken Lo Mein",
    image_file: "chicken-lo-mein.jpg",
    description: "Noodles, chicken, and veggies.",
    restaurant_id: 2,
  },
  {
    price: 8.00,
    name: "Pork Dumplings",
    image_file: "pork-dumplings.jpg",
    description: "Includes 3 dumplings.",
    restaurant_id: 2,
  },
  {
    price: 14.0,
    name: "Pad Thai",
    image_file: "pad-thai.jpg",
    description: "Noodles with eggs and vegetables tossed in tamarind suace.",
    restaurant_id: 3,
  },
  {
    price: 16.0,
    name: "Panang Curry",
    image_file: "panang-curry.jpg",
    description: "Vegetables in a creamy coconut and peanut sauce.",
    restaurant_id: 3,
  },
  {
    price: 9.0,
    name: "Tom Kha Soup",
    image_file: "tom-kha-soup.jpg",
    description: "Coconut chicken soup.",
    restaurant_id: 3,
  },
  {
    price: 14.0,
    name: "Bacon Cheeseburger",
    image_file: "bacon-cheeseburger.jpg",
    description:
      "Two 1/4lb beef patties, bacon, tomato, cheddar, spicy aioli, challah bun.",
    restaurant_id: 4,
  },
  {
    price: 12.0,
    name: "BLT",
    image_file: "blt.jpg",
    description: "Sandwich with bacon, lettuce, tomato, and mayo.",
    restaurant_id: 4,
  },
  {
    price: 13.0,
    name: "Grilled Cheese",
    image_file: "grilled-cheese.jpg",
    description: "Grilled cheese sandwich with a side of fries.",
    restaurant_id: 4,
  },
  {
    price: 13.0,
    name: "Cobb Salad",
    image_file: "cobb-salad.jpg",
    description: "Lettuce, tomato, hard boiled egg, bacon, grilled chicken, and bleu cheese.",
    restaurant_id: 5,
  },
  {
    price: 16.0,
    name: "Grilled Chicken Sandwich",
    image_file: "grilled-chicken-sandwich.jpg",
    description: "Grilled chicken, lettuce, tomato, onion, and honey mustard on a brioche bun.",
    restaurant_id: 5,
  },
  {
    price: 10.0,
    name: "Chicken Nachos",
    image_file: "chicken-nachos.jpg",
    description: "Chicken, melted cheese, sour cream, tomatoes, and guacamole over tortilla chips.",
    restaurant_id: 5,
  },
  {
    price: 11.0,
    name: "Breakfast Sandwich",
    image_file: "breakfast-sandwich.jpg",
    description: "Eggs, bacon, and cheese on a bagel.",
    restaurant_id: 6,
  },
  {
    price: 12.0,
    name: "Chicken Tenders",
    image_file: "chicken-tenders.jpg",
    description: "Fried chicken tenders with a side of fries.",
    restaurant_id: 6,
  },
  {
    price: 10.0,
    name: "Lemon Pepper Wings",
    image_file: "lemon-pepper-wings.jpg",
    description: "10 Chicken wings in lemon pepper seasoning.",
    restaurant_id: 6,
  },
  {
    price: 11.0,
    name: "Quesadilla",
    image_file: "quesadilla.jpg",
    description: "Chicken and cheese quesadilla.",
    restaurant_id: 7,
  },
  {
    price: 8.0,
    name: "Chips and Guacamole",
    image_file: "guacamole.jpg",
    description: "Chips with guacamole.",
    restaurant_id: 7,
  },
  {
    price: 7.0,
    name: "Torta",
    image_file: "torta.jpg",
    description: "Your choice of beef, chicken, or pork with beans, avocado, and cheese on a bun.",
    restaurant_id: 7,
  },
  {
    price: 11.0,
    name: "Bean and Cheese Burrito",
    image_file: "burrito.jpg",
    description: "Refried pinto beans and melted cheese.",
    restaurant_id: 8,
  },
  {
    price: 9.0,
    name: "Chilaquiles",
    image_file: "chilaquiles.jpg",
    description: "Tortilla chips with eggs and tomatillo sauce.",
    restaurant_id: 8,
  },
  {
    price: 12.0,
    name: "Fish Tacos",
    image_file: "fish-tacos.jpg",
    description: "Includes 3 tacos with grilled cod wtih lettuce, tomatoes, beans, and pico de gallo.",
    restaurant_id: 8,
  },
  {
    price: 13.0,
    name: "Enchilada Plate",
    image_file: "enchilada.jpg",
    description: "3 chicken enchiladas with red enchilada sauce, cheese and served with a side of refried pinto beans and rice.",
    restaurant_id: 9,
  },
  {
    price: 16.0,
    name: "Chips and Salsa",
    image_file: "salsa.jpg",
    description: "Homemade tortilla chips with salsa.",
    restaurant_id: 9,
  },
  {
    price: 9.0,
    name: "Beef Burrito",
    image_file: "beef-burrito.jpg",
    description: "Burrito with shredded beef, beans, and rice covered in red sauce and cheese.",
    restaurant_id: 9,
  },
  {
    price: 3.0,
    name: "Cheese Pizza ",
    image_file: "cheese-pizza.jpg",
    description: "One slice of cheese pizza.",
    restaurant_id: 10,
  },
  {
    price: 3.0,
    name: "Pepperoni Pizza",
    image_file: "pepperoni-pizza.jpg",
    description: "One slice of pepperoni pizza.",
    restaurant_id: 10,
  },
  {
    price: 3.0,
    name: "Veggie Pizza",
    image_file: "veggie-pizza.jpg",
    description: "One slice of pizza with mushroom, peppers, and olives.",
    restaurant_id: 10,
  },
  {
    price: 13.0,
    name: "Penne Alla Vodka",
    image_file: "penne.jpg",
    description: "Penne in vodka sauce.",
    restaurant_id: 11,
  },
  {
    price: 17.0,
    name: "Chicken Parmesan",
    image_file: "chicken-parmesan.jpg",
    description: "Breaded chicken with tomato sauce and mozzarella cheese served with spaghetti.",
    restaurant_id: 11,
  },
  {
    price: 17.0,
    name: "Cheese pizza",
    image_file: "cheese-pizza-2.jpg",
    description: "16in cheese pizza.",
    restaurant_id: 11,
  },
  {
    price: 13.0,
    name: "Cacio E Pepe",
    image_file: "cacio.jpg",
    description: "Pasta tossed with butter, black pepper, and pecorino romano cheese.",
    restaurant_id: 12,
  },
  {
    price: 10.0,
    name: "Meatballs",
    image_file: "meatballs.jpg",
    description: "Ground beef meatballs in tomato sauce.",
    restaurant_id: 12,
  },
  {
    price: 20.0,
    name: "Margherita Pizza",
    image_file: "margherita.jpg",
    description: "16in pizza with fresh tomato sauce, mozzarella, and basil.",
    restaurant_id: 12,
  },
];

const seedDishes = () => Dishes.bulkCreate(dishesData);

module.exports = seedDishes;
