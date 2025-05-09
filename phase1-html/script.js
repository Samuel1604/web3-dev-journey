// Function to greet the user with a custom message
function greetUser(name) {
  alert("Welcome, to " + name + " 's 👋 Portfolio");
}

// Function to display the developer's tech stack using an alert
function showTechStack() {
  // Selects the container holding the stack and alerts its text content
  const stack = document.querySelector(".stack-container");
  alert("Your Web3 stack is: " + stack.innerText);
}

// Function to toggle the visibility of a motivational message
function toggleMessage() {
  const msg = document.getElementById("special-msg");
  // Toggle display between 'block' and 'none'
  msg.style.display = msg.style.display === "none" ? "block" : "none";
}

// Run the following code only after the entire page has loaded
document.addEventListener("DOMContentLoaded", () => {
  // Handle dark mode state
  const toggle = document.getElementById("mode-toggle");
  const isDark = localStorage.getItem("theme") === "dark";

  // If dark mode was previously enabled, apply it
  if (isDark) document.body.classList.add("dark");

  // Set the toggle switch based on saved preference
  toggle.checked = isDark;

  // When user toggles the switch, apply/remove dark mode and save preference
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  // Add event listeners to custom buttons
  document.getElementById("greetUser").addEventListener("click", () => {
    greetUser("Samuel"); // Greet user with predefined name
  });

  document
    .getElementById("showTechStack")
    .addEventListener("click", showTechStack); // Show tech stack
  document
    .getElementById("toggleMessage")
    .addEventListener("click", toggleMessage); // Toggle motivational message
});
