function checkNumber() {
  var x = 0;
  if (x === 0) {
    return "Neither positive nor negative";
  } else if (x > 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}

var result = checkNumber();
console.log(result);
