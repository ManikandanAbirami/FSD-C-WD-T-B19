alert(
  "Welcome to The Foodie Hub!\nMenu: \n1. Pizza \n2. Burger \n3. Pasta \n4. Salad"
);

const amitOrder = prompt(
  "Amit, what would you like to order? (Choose 1, 2, 3, or 4)"
);
const benOrder = prompt(
  "Ben, what would you like to order? (Choose 1, 2, 3, or 4)"
);
const chitraOrder = prompt(
  "Chitra, what would you like to order? (Choose 1, 2, 3, or 4)"
);
const divyaOrder = prompt(
  "Divya, what would you like to order? (Choose 1, 2, 3, or 4)"
);

alert(
  `You have ordered:\nAmit: ${amitOrder}\nBen: ${benOrder}\nChitra: ${chitraOrder}\nDivya: ${divyaOrder}`
);

let tableNumber = 5;
const restaurantName = "The Foodie Hub";
let isOrderConfirmed = true;

let orderConfirmation = isOrderConfirmed ? "Yes" : "No";

console.log(`Table Number: ${tableNumber}.`);
console.log(`Restaurant Name: ${restaurantName}.`);
console.log(`Order Confirmed: ${orderConfirmation}.`);

let totalBill = 2000;
let numberOfFriends = 4;

let amountPerPerson = totalBill / numberOfFriends;

console.log(`Total Bill: ${totalBill}`);
console.log(`Each person pays: ${amountPerPerson}`);

function callWaiter(request) {
  return `Waiter, we need ${request}.`;
}

//console.log(callWaiter("water"));
//console.log(callWaiter("napkins"));
