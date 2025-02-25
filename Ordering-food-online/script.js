console.log("Script started");
console.log("Food is ordered!!!");
let foodOrder = new Promise((resolve, reject) => {
  let isFoodReady = false;

  setTimeout(() => {
    if (isFoodReady) {
      resolve("Food is ready"); // success
    } else {
      reject("Sorry, the resturant is closed!"); // failure
    }
  }, 2000);
});

foodOrder
  .then((message) => {
    console.log(message); // If promise is resolved
  })
  .catch((error) => {
    console.log(error); // If promise is rejected
  });

function activity(name) {
  console.log(name);
}
activity("Meanwhile, I am coding!!!!");
