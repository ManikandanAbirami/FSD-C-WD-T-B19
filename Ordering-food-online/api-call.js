async function fetchUsers() {
  try {
    console.log("Fetching users...");

    // Making API request
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    // Select the user list container
    let userList = document.getElementById("user-list");

    // Display users
    users.forEach((user) => {
      let listItem = document.createElement("li");
      listItem.textContent = `${user.name} (${user.email})`;
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchUsers();
