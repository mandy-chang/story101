// Define the story structure
const story = [
    {
        text: "You are standing at a crossroads. Do you want to go left or right?",
        options: {
            "Go Left": 1,
            "Go Right": 2
        }
    },
    {
        text: "You went left and encountered a forest. Do you want to explore or turn back?",
        options: {
            "Explore": 3,
            "Turn Back": 0
        }
    },
    {
        text: "You went right and found a village. Do you want to enter or keep walking?",
        options: {
            "Enter Village": 4,
            "Keep Walking": 0
        }
    },
    {
        text: "You explored the forest and found a hidden treasure chest. Congratulations!",
        options: {}
    },
    {
        text: "You entered the village and discovered it was full of friendly people. You’ve made new friends. Congratulations!",
        options: {}
    }
];

// Initialize the user's choices (if you want to track the journey)
let userChoices = [];
let currentStep = 0; // Start from the beginning of the story

// Handle starting the story
document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("home-screen").style.display = "none"; // Hide the home screen
    document.getElementById("story-screen").style.display = "block"; // Show the story screen
    currentStep = 0; // Start from the beginning of the story
    showStory(currentStep); // Display the first part of the story
});

// Show the story based on current step
function showStory(step) {
    const storyText = document.getElementById("story-text");
    const optionsList = document.getElementById("options");
    const currentStory = story[step];

    storyText.textContent = currentStory.text;
    optionsList.innerHTML = ""; // Clear previous options

    if (Object.keys(currentStory.options).length > 0) {
        // If there are options, display them
        for (let option in currentStory.options) {
            const optionElement = document.createElement("div");
            optionElement.textContent = option;
            optionElement.classList.add("option");
            optionElement.addEventListener("click", function() {
                handleOptionClick(option, currentStory.options[option]);
            });
            optionsList.appendChild(optionElement);
        }
    } else {
        // If no options, display the ending screen
        document.getElementById("story-screen").style.display = "none"; // Hide the story screen
        document.getElementById("ending-screen").style.display = "block"; // Show the ending screen
        document.getElementById("ending-text").textContent = "Congratulations, you've completed the adventure!";
    }
}

// Handle when the user clicks on an option
function handleOptionClick(option, nextStep) {
    userChoices.push(option); // Save user's choice
    currentStep = nextStep; // Move to the next part of the story
    showStory(currentStep); // Show the updated story
}

// Return home from the story screen or ending screen
document.getElementById("home-button-story").addEventListener("click", function() {
    document.getElementById("story-screen").style.display = "none"; // Hide the story screen
    document.getElementById("home-screen").style.display = "block"; // Show the home screen
});

document.getElementById("home-button-ending").addEventListener("click", function() {
    document.getElementById("ending-screen").style.display = "none"; // Hide the ending screen
    document.getElementById("home-screen").style.display = "block"; // Show the home screen
});
