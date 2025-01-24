const stories = [
    {
        title: "Crossroads Adventure",
        content: [
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
        ]
    },
    {
        title: "Haunted House",
        content: [
            {
                text: "You approach a haunted house. Do you want to enter or run away?",
                options: {
                    "Enter": 1,
                    "Run Away": 2
                }
            },
            {
                text: "You entered the house and saw a ghost. Do you want to talk to it or hide?",
                options: {
                    "Talk to Ghost": 3,
                    "Hide": 0
                }
            },
            {
                text: "You ran away and found a safe place. Do you want to stay there or go back?",
                options: {
                    "Stay": 0,
                    "Go Back": 1
                }
            },
            {
                text: "You talked to the ghost and discovered it's friendly. Congratulations!",
                options: {}
            }
        ]
    },
    {
        title: "Space Adventure",
        content: [
            {
                text: "You are on a spaceship. Do you want to explore the cockpit or the engine room?",
                options: {
                    "Cockpit": 1,
                    "Engine Room": 2
                }
            },
            {
                text: "You explored the cockpit and found an alien message. Do you want to decode it or ignore it?",
                options: {
                    "Decode": 3,
                    "Ignore": 0
                }
            },
            {
                text: "You explored the engine room and found a damaged part. Do you want to repair it or call for help?",
                options: {
                    "Repair": 4,
                    "Call for Help": 0
                }
            },
            {
                text: "You decoded the message and discovered a hidden treasure map. Congratulations!",
                options: {}
            },
            {
                text: "You repaired the engine and saved the spaceship. Congratulations!",
                options: {}
            }
        ]
    }
];

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function renderStories() {
    const featuredStories = document.getElementById('featured-stories');
    featuredStories.innerHTML = '';

    stories.forEach((story, index) => {
        const storyDiv = document.createElement('div');
        storyDiv.className = 'story-box';
        storyDiv.innerHTML = `<h3>${story.title}</h3>`;
        storyDiv.addEventListener('click', () => showStory(index));
        featuredStories.appendChild(storyDiv);
    });
}

function showStory(index) {
    const story = stories[index];
    const storySection = document.getElementById('story');
    const dialogue = document.getElementById('dialogue');
    const choices = document.getElementById('choices');
    let currentSceneIndex = 0;

    function renderScene(sceneIndex) {
        const scene = story.content[sceneIndex];
        dialogue.classList.remove('fade-in');
        dialogue.classList.add('fade-out');
        choices.classList.remove('fade-in');
        choices.classList.add('fade-out');

        setTimeout(() => {
            dialogue.innerText = scene.text;
            choices.innerHTML = '';

            for (const [optionText, nextSceneIndex] of Object.entries(scene.options)) {
                const button = document.createElement('button');
                button.className = 'choice';
                button.innerText = optionText;
                button.addEventListener('click', () => {
                    button.classList.add('selected');
                    setTimeout(() => {
                        renderScene(nextSceneIndex);
                    }, 500);
                });
                choices.appendChild(button);
            }

            dialogue.classList.remove('fade-out');
            dialogue.classList.add('fade-in');
            choices.classList.remove('fade-out');
            choices.classList.add('fade-in');
        }, 500);
    }

    showSection('story');
    renderScene(currentSceneIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    renderStories();
});
