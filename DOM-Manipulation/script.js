const listItems = document.querySelectorAll("li");

const p = document.createElement("p");
p.textContent = "I will be removed";

const scrollableDiv = document.getElementById("scrollable");
// scrollableDiv.prepend(p);

document.body.prepend(p);

const parent = document.querySelector("ol");
const litItemsToAdd = [];
function addList() {
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = `List item i=${i}`;
    litItemsToAdd.push(li);
  }
  parent.append(...litItemsToAdd);
}
