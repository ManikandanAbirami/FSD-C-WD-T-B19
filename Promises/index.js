// promises example
const promiseObj = new Promise((resolve, reject) => {
  // producer code
  console.log("Promise is created");
  setTimeout(() => {
    // resolve("Promise is resolved");
    reject("Promise is rejected");
  }, 1000);
});

// console.log(promiseObj);
promiseObj.then((result) => {
  console.log(result);
});

promiseObj.catch((error) => {
  console.log(error);
});
