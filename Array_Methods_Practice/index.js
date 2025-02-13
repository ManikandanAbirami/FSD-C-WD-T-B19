let fruits = ["banana", "orange", "apple", "kiwi", "car-key", "pear", "peach"];

// Let's count all the fruits in the array(basket)

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "car-key") {
//     console.log("I found my keys!");
//     return;
//   }
//   console.log(fruits[i]);
// }

let juiceBasket = fruits.map((fruit) => fruit + " Juice!");

console.log(juiceBasket);
