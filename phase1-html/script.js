// Function to greet the user with a custom message
function greetUser(name) {
  alert(`Welcome to ${name}'s 👋 Portfolio`);
}

// Function to display the developer's tech stack using an alert
function showTechStack() {
  const stack = document.querySelector(".stack-container");
  alert(`Your Web3 stack is: \n${stack.innerText}`);
}

// Function to toggle the visibility of a motivational message
function toggleMessage() {
  const msg = document.getElementById("special-msg");
  msg.style.display = msg.style.display === "none" ? "block" : "none";
}

// Run the following code only after the entire page has loaded
document.addEventListener("DOMContentLoaded", () => {
  // Handle dark mode state
  const toggle = document.getElementById("mode-toggle");
  const isDark = localStorage.getItem("theme") === "dark";

  // Apply dark mode if previously enabled
  if (isDark) document.body.classList.add("dark");

  // Set the toggle switch based on saved preference
  toggle.checked = isDark;

  // Add event listener to toggle dark mode on/off
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  // Add event listeners for the buttons
  document.getElementById("welcome-msg").addEventListener("click", () => greetUser("Samuel"));
  document.getElementById("techStack-btn").addEventListener("click", showTechStack);
  document.getElementById("motivate-btn").addEventListener("click", toggleMessage);
});

// Array of weekly project milestones
const milestones = [
  "Build a Landing Page for a DAO",
  "Create a React Crypto Dashboard",
  "Deploy a 'Greet Me' smart contract",
  "Build a Decentralized Guestbook dApp"
];

// Get the UL element in the milestones section
const milestoneList = document.getElementById("milestone-list");

// Loop through each milestone and create a list item for it
milestones.forEach((goal, index) => {
  const li = document.createElement("li");
  li.textContent = `Week ${index + 1}: ${goal}`;
  milestoneList.appendChild(li);
});

// Daily habits list
const dailyHabits = [
  "Code for at least 1 hour",
  "Read Web3 or JavaScript articles",
  "Write one Tweet about what I learned",
  "Push code to GitHub",
  "Reflect on the day’s progress"
];

// Get the UL element for daily habits
const habitsList = document.getElementById("daily-habits-list");

// Loop through each habit and create a list item for it
dailyHabits.forEach((habit, index) => {
  const li = document.createElement("li");
  li.textContent = `Habit ${index + 1}: ${habit}`;
  habitsList.appendChild(li);
});
