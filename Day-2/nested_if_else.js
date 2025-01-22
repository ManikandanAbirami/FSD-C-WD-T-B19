var x = -10;

if (x === 0) {
  console.log("Neither positive nor negative - Neutral!");
} else if (x > 0) {
  if (x < 10) {
    console.log("single digit positive number");
  } else {
    console.log("double digit positive number");
  }
} else {
  console.log("Negative");
}
