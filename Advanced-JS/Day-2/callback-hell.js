// function step1(callback) {
//   setTimeout(function () {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }
// function step2(callback) {
//   setTimeout(function () {
//     console.log("Step 2 completed");
//     callback();
//   }, 1000);
// }
// function step3(callback) {
//   setTimeout(function () {
//     console.log("Step 3 completed");
//     callback();
//   }, 1000);
// }

// function step4(callback) {
//   setTimeout(function () {
//     console.log("Step 4 completed");
//     callback();
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(() => {
//         console.log("All steps completed");
//       });
//     });
//   });
// });

// the same code using promises
function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Step 2 completed");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Step 3 completed");
      // resolve();
      reject("Error in step 3");
    }, 1000);
  });
}

function step4() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Step 4 completed");
      resolve();
    }, 1000);
  });
}

step1()
  .then(step2)
  .then(step3)
  .then(step4)
  .then(() => {
    console.log("All steps completed");
  })
  .catch((error) => {
    console.log(error);
  });

// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(() => {
//         console.log("All steps completed");
//       });
//     });
//   });
// });
