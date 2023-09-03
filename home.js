var fishPond = document.getElementById("fish-pond");

// Create the fish
var fish = {
x: 250,
y: 250,
size: 50,
color: "red"
};

// Add the fish to the pond
fishPond.appendChild(fish);

// Move the fish around
function moveFish() {
fish.x += Math.random() * 10 - 5;
fish.y += Math.random() * 10 - 5;

// Check if the fish has gone off the screen
if (fish.x < 0 || fish.x > fishPond.width) {
fish.x = Math.random() * fishPond.width;
}

if (fish.y < 0 || fish.y > fishPond.height) {
fish.y = Math.random() * fishPond.height;
}

// Update the fish's position
fishPond.style.left = fish.x + "px";
fishPond.style.top = fish.y + "px";
}

// Start moving the fish
setInterval(moveFish, 100); 