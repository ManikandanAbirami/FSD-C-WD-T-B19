// async function myFunction() {
//   return "Hello!";
// }

// myFunction().then((msg) => {
//   console.log(msg);
// });

async function example() {
  let result = await Promise.resolve("Data loaded!!!");
  console.log(result);
}

example();
