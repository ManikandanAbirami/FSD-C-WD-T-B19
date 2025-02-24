function step1(callback) {
  setTimeout(function () {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}
function step2(callback) {
  setTimeout(function () {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}
function step3(callback) {
  setTimeout(function () {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}

function step4(callback) {
  setTimeout(function () {
    console.log("Step 4 completed");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      step4(() => {
        console.log("All steps completed");
      });
    });
  });
});
