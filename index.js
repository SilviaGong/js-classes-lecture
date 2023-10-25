const Eevee = require('./eevee.js');
const Cereal = require('./cereal.js');
const Milk = require('./milk.js');
const Dessert = require('./dessert.js');
const Meal = require('./meal.js');


let mondayBowl = new Cereal("Cinnamon Toast Crunch",
  ["Cinnamon",
    "Toast",
    "Sugar",
    "Crunch",
    "MSG"
  ], 8.95, true, false);
console.log(mondayBowl);

let milk = new Milk("brand", "flavor");
console.log(milk);