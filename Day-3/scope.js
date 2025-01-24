var x = 10; // Global Scope
function display() {
  var y = 200; // Local Scope
  var x = 30; // Local Scope
  console.log(x);
}
display();
console.log(x);
console.log(y);
