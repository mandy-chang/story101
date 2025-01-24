// Story structure
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

// Initialize
let currentStep = 0;

// Show the Home Screen
document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("story-screen").style.display = "block";
    showStory(currentStep);
});

// Show the story and options
function showStory(step) {
    const storyText = document.getElementById("story-text");
    const optionsList = document.getElementById("options");
    const currentStory = story[step];

    storyText.textContent = currentStory.text;
    optionsList.innerHTML = ""; // Clear previous options

    if (Object.keys(currentStory.options).length > 0) {
        for (let option in currentStory.options) {
            const optionElement = document.createElement("div");
            optionElement.textContent = option;
            optionElement.classList.add("option");
            optionElement.addEventListener("click", function() {
                handleOptionClick(currentStory.options[option]);
            });
            optionsList.appendChild(optionElement);
        }
    } else {
        document.getElementById("story-screen").style.display = "none";
        document.getElementById("ending-screen").style.display = "block";
        document.getElementById("ending-text").textContent = "Congratulations, you've completed the adventure!";
    }
}

// Handle option click and move to the next story step
function handleOptionClick(nextStep) {
    currentStep = nextStep;
    showStory(currentStep);
}

// Go back to the home screen from the story screen
document.getElementById("home-button-story").addEventListener("click", function() {
    document.getElementById("story-screen").style.display = "none";
    document.getElementById("home-screen").style.display = "block";
});

// Go back to the home screen from the ending screen
document.getElementById("home-button-ending").addEventListener("click", function() {
    document.getElementById("ending-screen").style.display = "none";
    document.getElementById("home-screen").style.display = "block";
});
