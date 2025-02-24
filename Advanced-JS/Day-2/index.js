function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye");
}

greet("John", sayGoodbye);
