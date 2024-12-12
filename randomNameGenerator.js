// File: randomNameGenerator.js

// Predefined list of names
const names = [
    "Alice", "Bob", "Charlie", "Diana", "Edward",
    "Fiona", "George", "Hannah", "Ian", "Julia",
    "Kevin", "Lily", "Michael", "Nina", "Oscar",
    "Paula", "Quincy", "Rachel", "Sam", "Tina",
    "Uma", "Victor", "Wendy", "Xander", "Yara", "Zane"
];

// Function to generate a random name
function generateRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

// Event listener for button click
document.getElementById("generateButton").addEventListener("click", () => {
    const randomName = generateRandomName();
    document.getElementById("result").textContent = `Generated Name: ${randomName}`;
});

// Display a name on page load
window.onload = () => {
    document.getElementById("result").textContent = `Generated Name: ${generateRandomName()}`;
};
