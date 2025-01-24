// Stories
const stories = {
    "forest-adventure": {
        title: "Forest Adventure",
        steps: {
            0: {
                text: "You find yourself at the edge of a dark forest. Do you enter?",
                choices: {
                    "Enter the forest": 1,
                    "Turn back": 2
                }
            },
            1: {
                text: "You walk into the forest and hear strange noises. Do you investigate or keep walking?",
                choices: {
                    "Investigate": 3,
                    "Keep walking": 4
                }
            },
            2: {
                text: "You decided to turn back and missed a great adventure.",
                ending: true
            },
            3: {
                text: "You investigate and find a hidden treasure chest! Do you open it?",
                choices: {
                    "Open the chest": 5,
                    "Leave it": 6
                }
            },
            4: {
                text: "You kept walking and found nothing interesting. The end.",
                ending: true
            },
            5: {
                text: "You opened the chest and found a magical artifact! The end.",
                ending: true
            },
            6: {
                text: "You left the chest and walked away. The end.",
                ending: true
            }
        }
    },
    "dragon-quest": {
        title: "Dragon Quest",
        steps: {
            0: {
                text: "A mighty dragon blocks your path. Do you fight it or run away?",
                choices: {
                    "Fight the dragon": 1,
                    "Run away": 2
                }
            },
            1: {
                text: "You fought bravely and defeated the dragon! The end.",
                ending: true
            },
            2: {
                text: "You ran away and lived to fight another day. The end.",
                ending: true
            }
        }
    },
    "treasure-hunt": {
        title: "Treasure Hunt",
        steps: {
            0: {
                text: "You're on a treasure hunt. Do you search the cave or the beach?",
                choices: {
                    "Search the cave": 1,
                    "Search the beach": 2
                }
            },
            1: {
                text: "In the cave, you find a treasure chest. Do you open it?",
                choices: {
                    "Open the chest": 3,
                    "Leave it": 4
                }
            },
            2: {
                text: "You found a buried treasure chest on the beach! Do you open it?",
                choices: {
                    "Open the chest": 3,
                    "Leave it": 4
                }
            },
            3: {
                text: "You found a pile of gold! The end.",
                ending: true
            },
            4: {
                text: "You walked away from the treasure. The end.",
                ending: true
            }
        }
    }
};

// Variables to track the current story
let currentStory = null;
let currentStep = 0;
let userChoices = [];

// Load the selected story
function loadStory(storyName) {
    currentStory = stories[storyName].steps;
    currentStep = 0;
    userChoices = [];
    showStep();
}

// Show a story step
function showStep() {
    const step = currentStory[currentStep];
    document.getElementById('story-text').textContent = step.text;
    
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';

    if (step.choices) {
        for (const [choice, nextStep] of Object.entries(step.choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.onclick = () => {
                currentStep = nextStep;
                userChoices.push(choice);
                showStep();
            };
            choicesDiv.appendChild(button);
        }
    } else if (step.ending) {
        document.getElementById('ending-text').textContent = step.text;
        document.getElementById('story-screen').style.display = 'none';
        document.getElementById('ending-screen').style.display = 'block';
    }
}

// Event listeners for the story icons
document.querySelectorAll('.story-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const storyName = this.getAttribute('data-story'); // Get the story name from the data-story attribute
        document.getElementById('home-screen').style.display = 'none'; // Hide the home screen
        document.getElementById('story-screen').style.display = 'block'; // Show the story screen
        loadStory(storyName); // Load the corresponding story
    });
});

// Event listener for the 'Go Back' button
document.getElementById('go-back-button').addEventListener('click', function() {
    document.getElementById('story-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
});

// Event listener for the ending screen's home button
document.getElementById('home-button-ending').addEventListener('click', function() {
    document.getElementById('ending-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
});
