const stories = [
    {
        title: "Story 1",
        description: "Description of Story 1",
        interactions: [
            { id: 1, text: "Interaction 1" },
            { id: 2, text: "Interaction 2" },
            { id: 3, text: "Interaction 3" },
            { id: 4, text: "Interaction 4" },
            { id: 5, text: "Interaction 5" },
        ],
    },
    {
        title: "Story 2",
        description: "Description of Story 2",
        interactions: [
            { id: 1, text: "Interaction 1" },
            { id: 2, text: "Interaction 2" },
            { id: 3, text: "Interaction 3" },
            { id: 4, text: "Interaction 4" },
            { id: 5, text: "Interaction 5" },
        ],
    },
    {
        title: "Story 3",
        description: "Description of Story 3",
        interactions: [
            { id: 1, text: "Interaction 1" },
            { id: 2, text: "Interaction 2" },
            { id: 3, text: "Interaction 3" },
            { id: 4, text: "Interaction 4" },
            { id: 5, text: "Interaction 5" },
        ],
    },
    {
        title: "Story 4",
        description: "Description of Story 4",
        interactions: [
            { id: 1, text: "Interaction 1" },
            { id: 2, text: "Interaction 2" },
            { id: 3, text: "Interaction 3" },
            { id: 4, text: "Interaction 4" },
            { id: 5, text: "Interaction 5" },
        ],
    },
    {
        title: "Story 5",
        description: "Description of Story 5",
        interactions: [
            { id: 1, text: "Interaction 1" },
            { id: 2, text: "Interaction 2" },
            { id: 3, text: "Interaction 3" },
            { id: 4, text: "Interaction 4" },
            { id: 5, text: "Interaction 5" },
        ],
    },
];

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function renderStories() {
    const featuredStories = document.getElementById('featured-stories');
    featuredStories.innerHTML = '';

    stories.forEach((story, index) => {
        const storyDiv = document.createElement('div');
        storyDiv.className = 'story';
        storyDiv.innerHTML = `<h3>${story.title}</h3><p>${story.description}</p>`;
        storyDiv.addEventListener('click', () => showStory(index));
        featuredStories.appendChild(storyDiv);
    });
}

function showStory(index) {
    const story = stories[index];
    const storySection = document.getElementById('story');
    const dialogue = document.getElementById('dialogue');
    const choices = document.getElementById('choices');

    showSection('story');
    dialogue.innerText = `Welcome to ${story.title}`;
    choices.innerHTML = '';

    story.interactions.forEach(interaction => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.innerText = interaction.text;
        button.addEventListener('click', () => handleInteraction(index, interaction.id));
        choices.appendChild(button);
    });
}

function handleInteraction(storyIndex, interactionId) {
    alert(`You selected Interaction ${interactionId} in Story ${storyIndex + 1}`);
}

function nextScene() {
    // Function to handle advancing to the next scene
    alert('Advancing to the next scene...');
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    renderStories();
});
