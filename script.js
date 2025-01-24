// Story data structure
const stories = {
    'forest-adventure': [
        { text: "You enter a dark forest. Do you go left or right?", choices: { left: 1, right: 2 } },
        { text: "You encounter a bear! Do you fight or run?", choices: { fight: 3, run: 4 } },
        { text: "You find a mystical lake. Do you swim or keep walking?", choices: { swim: 5, walk: 6 } },
        { text: "You bravely fight the bear and win! But you're injured.", choices: { continue: 7, rest: 8 } },
        { text: "You run away but get lost. Do you climb a tree to look around or keep walking?", choices: { climb: 9, walk: 10 } },
        { text: "The lake is magical! You gain powers but also feel a strange presence.", choices: { investigate: 11, leave: 12 } },
        { text: "You keep walking and find a cabin. Do you knock or sneak inside?", choices: { knock: 13, sneak: 14 } },
        { text: "Despite your injury, you continue through the forest and find a hidden treasure!", ending: true },
        { text: "You decide to rest but the bear returns and catches you off guard. Game over!", ending: true },
        { text: "From the top of the tree, you see a path out of the forest. You escape safely!", ending: true },
        { text: "You keep walking and eventually find a village where you are safe.", ending: true },
        { text: "The presence is a friendly spirit who grants you safe passage through the forest!", ending: true },
        { text: "You leave the lake and continue your journey, eventually finding a village.", ending: true },
        { text: "The cabin owner welcomes you and gives you shelter. You're safe for now.", ending: true },
        { text: "You sneak inside the cabin but get caught and thrown out. You lose.", ending: true },
    ],
    'dragon-quest': [
        { text: "You are tasked with slaying a dragon. Do you gather allies or go alone?", choices: { allies: 1, alone: 2 } },
        { text: "You gather a brave team of warriors. Do you march to the dragon's lair or ambush it?", choices: { march: 3, ambush: 4 } },
        { text: "You bravely go alone. Do you use magic or a sword?", choices: { magic: 5, sword: 6 } },
        { text: "You march directly to the lair and find the dragon asleep. Attack now or set a trap?", choices: { attack: 7, trap: 8 } },
        { text: "You ambush the dragon and catch it by surprise! It’s weakened but angry. Fight or flee?", choices: { fight: 9, flee: 10 } },
        { text: "Your magic defeats the dragon, and you are hailed as a hero!", ending: true },
        { text: "You fight with a sword but the dragon overpowers you. Game over!", ending: true },
        { text: "You attack the dragon while it's asleep and win easily. You become a legend!", ending: true },
        { text: "You set a trap, but it fails. The dragon wakes and attacks. Game over!", ending: true },
        { text: "You bravely fight the weakened dragon and win!", ending: true },
        { text: "You flee and escape, but your quest remains unfulfilled.", ending: true },
    ],
    'treasure-hunt': [
        { text: "You find an old map leading to hidden treasure. Do you sail across the sea or venture into the mountains?", choices: { sea: 1, mountains: 2 } },
        { text: "You sail the seas but face a storm. Do you brace for impact or try to steer through?", choices: { brace: 3, steer: 4 } },
        { text: "You hike into the mountains and find a cave. Do you explore it or keep climbing?", choices: { explore: 5, climb: 6 } },
        { text: "You brace for the storm and survive! Do you continue sailing or dock at an island?", choices: { continue: 7, dock: 8 } },
        { text: "You steer through the storm but the ship crashes. Game over!", ending: true },
        { text: "You explore the cave and find treasure! You're rich!", ending: true },
        { text: "You keep climbing and reach the peak, where the treasure awaits!", ending: true },
        { text: "You continue sailing and find the island of the treasure.", ending: true },
        { text: "You dock at the island and discover it's home to the treasure!", ending: true },
    ]
};

// Story handling variables
let currentStory = [];
let currentStep = 0;
let userChoices = [];

// Load a story
function loadStory(storyName) {
    currentStory = stories[storyName];
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

// Event listeners
document.querySelectorAll('.story-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const storyName = this.getAttribute('data-story');
        document.getElementById('home-screen').style.display = 'none';
        document.getElementById('story-screen').style.display = 'block';
        loadStory(storyName);
    });
});

document.getElementById('submit-choice').addEventListener('click', function() {
    const choice = document.getElementById('choice').value;
    const step = currentStory[currentStep];
    
    if (step.choices[choice]) {
        currentStep = step.choices[choice];
        userChoices.push(choice);
        showStep();
    } else {
        alert('Invalid choice! Please try again.');
    }
});

document.getElementById('go-back-button').addEventListener('click', function() {
    document.getElementById('story-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
});

document.getElementById('home-button-ending').addEventListener('click', function() {
    document.getElementById('ending-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
});

document.getElementById('analyze-button').addEventListener('click', function() {
    const analysis = `You made the following choices: ${userChoices.join(', ')}.`;
    document.getElementById('analysis-report').textContent = analysis;
});
