const stories = [
    {
        title: "The Forest of Whispers",
        content: [
            {
                text: "You find yourself standing at the edge of an eerie forest known as the Forest of Whispers. Legends say the forest holds secrets, but only for those brave enough to explore it. The air is heavy with a sense of mystery, and the wind carries faint whispers, almost like the forest itself is alive. The dense trees seem to lean in, as if eager to swallow you whole. A chill runs down your spine, but your curiosity urges you forward.\n\nThe sun is beginning to set, casting long shadows across the ground. You hear the sound of rustling leaves and faint whispers calling your name, though there is no one in sight. In front of you, two paths diverge into the unknown. One is wide and well-traveled, its dirt surface packed hard by countless footsteps. The other is narrow and overgrown with vines, barely visible beneath the thick underbrush.",
                options: {
                    "Take the wide path": 1,
                    "Venture down the overgrown path": 4,
                    "Turn around and leave the forest": 7
                }
            },
            {
                text: "You step onto the wide path, the ground firm beneath your feet. The forest seems quieter here, the whispers fading into the distance. The path twists and turns, and after walking for what feels like hours, you notice a faint light flickering through the trees ahead.\n\nYou soon arrive at a hidden village nestled deep in the forest. The villagers, clad in earthy tones, eye you warily but do not seem hostile. An elder steps forward, her face lined with age and wisdom. “You should not be here,” she says. “The forest is dangerous, and there are things better left undiscovered.”\n\nThe villagers warn you of a cursed artifact hidden deep in the woods. They tell you it is said to grant immense power but at a terrible cost. You are faced with a decision:",
                options: {
                    "Stay in the village": 2,
                    "Go back to search for the artifact": 3
                }
            },
            {
                text: "You spend the night listening to tales of those who sought the artifact and met untimely ends. As the dawn breaks, you decide to heed the villagers’ advice and leave the forest. However, as you walk away, you can’t shake the feeling that something is watching you.",
                options: {}
            },
            {
                text: "Deeper into the forest, the whispers grow deafening. You stumble upon a stone altar, the cursed artifact resting atop it. The air around it crackles with energy. Do you dare touch it?",
                options: {}
            },
            {
                text: "You push aside the vines and step onto the narrow path. The forest grows darker, the canopy above blocking out the fading sunlight. The whispers grow louder, almost insistent, as if guiding you somewhere. After some time, you come across an ancient tree with glowing runes carved into its bark. The runes pulse faintly, as if alive.\n\nThe tree emanates a strange energy, and you feel drawn to it. The whispers seem to emanate from the tree itself. You are faced with a choice:",
                options: {
                    "Touch the tree": 5,
                    "Leave the tree alone": 6
                }
            },
            {
                text: "The new world is both beautiful and dangerous. You must navigate this magical realm, learning its secrets and defending it from dark forces that seek to corrupt it. The tree becomes your ally, guiding you through this strange land.",
                options: {}
            },
            {
                text: "The forest seems darker as you make your way back. The whispers follow you, growing fainter but never disappearing. You leave the forest, but a mark has been left on you—a faint glowing rune now etched on your palm.",
                options: {}
            },
            {
                text: "You turn your back on the forest, the whispers growing fainter as you walk away. The sense of unease lingers, but you tell yourself you made the right decision. However, that night, as you lie in bed, the whispers return. They are louder now, calling your name with urgency.\n\nYou wake up in a cold sweat. The whispers have followed you, invading your dreams. You are haunted by visions of the forest, of the paths you did not take, of the secrets left undiscovered. Eventually, you decide to:",
                options: {
                    "Return to the forest": 8,
                    "Seek help": 9
                }
            },
            {
                text: "The forest seems different this time, more alive and more menacing. The whispers guide you back to the paths you once faced. Will you make the same choices, or will you forge a new path?",
                options: {}
            },
            {
                text: "The scholars tell you that the forest has marked you. To free yourself, you must confront the source of the whispers. Reluctantly, you prepare to face the forest one last time, armed with knowledge and resolve.",
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
                text: "You talked to the ghost and discovered it's friendly. Congratulations!",
                options: {}
            },
            {
                text: "You ran away and found a safe place. Do you want to stay there or go back?",
                options: {
                    "Stay": 0,
                    "Go Back": 1
                }
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

function checkStoryInput() {
    const storyInput = document.getElementById('story-input').value;
    if (storyInput.toLowerCase() === 'stop') {
        showSection('home');
        document.getElementById('story-input').value = ''; // Clear the input box
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    renderStories();
});
