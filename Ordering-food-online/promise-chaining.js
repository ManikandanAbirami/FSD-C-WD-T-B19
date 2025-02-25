// Wake up!
// Brush your teeth!
// Make coffee!
// Read a book!

function wakeup() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Wake up!");
    }, 1000);
  });
}

function brushTeeth() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Brush your teeth!");
    }, 2000);
  });
}
function makeCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Make coffee!");
      // reject("Coffee machine is broken!");
    }, 1500);
  });
}
function readBook() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Read a book!");
    }, 2500);
  });
}

// wakeup()
//   .then((msg) => {
//     console.log(msg);
//     return brushTeeth();
//   })
//   .then((msg) => {
//     console.log(msg);
//     return makeCoffee();
//   })
//   .then((msg) => {
//     console.log(msg);
//     return readBook();
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log("Something went wrong: ", error);
//   });

async function monringRoutine() {
  try {
    console.log(await wakeup());
    console.log(await brushTeeth());
    console.log(await makeCoffee());
    console.log(await readBook());
    console.log("End of routine");
  } catch (error) {
    console.log("Something went wrong: ", error);
  }
}

monringRoutine();
