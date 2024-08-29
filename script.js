// Array of science challenges
const challenges = [
    "Build a bridge from household items and see how much weight it can hold.",
    "Create a mini volcano using baking soda and vinegar.",
    "Design a simple water filter using materials like sand, charcoal, and gravel.",
    "Build a simple catapult and test different angles to see which launches a projectile the farthest.",
    "Grow crystals from a solution of salt or sugar and observe their formation.",
    "Make a solar oven from a pizza box and use it to melt s'mores.",
    "Investigate how different liquids affect the buoyancy of objects by creating a density tower."
];

// Function to display a random challenge
function getChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomIndex];
    document.getElementById('challenge').textContent = challenge;
}

// Initialize with a challenge
getChallenge();
