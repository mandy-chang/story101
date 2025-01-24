// Function to start a story
function startStory(storyId) {
  document.querySelector('main').style.display = 'none';
  document.getElementById('story-screen').style.display = 'block';
  loadStory(storyId);
}

// Function to load the selected story
function loadStory(storyId) {
  const storyText = document.getElementById('storyText');
  const choicesDiv = document.getElementById('choices');
  
  // Load initial story and choices based on the storyId
  if (storyId === 'story1') {
    storyText.textContent = "You are an adventurer searching for a lost treasure deep in the jungle. What will you do?";
    choicesDiv.innerHTML = `
      <button onclick="nextChoice('story1', 1)">Cross the River</button>
      <button onclick="nextChoice('story1', 2)">Enter the Cave</button>
      <button onclick="nextChoice('story1', 3)">Follow the Trail of Markings</button>
      <button onclick="nextChoice('story1', 4)">Climb the Mountain</button>
      <button onclick="nextChoice('story1', 5)">Search for Supplies</button>
    `;
  } else if (storyId === 'story2') {
    storyText.textContent = "You've been dared to spend a night in a haunted mansion. Strange noises are coming from within. What will you do?";
    choicesDiv.innerHTML = `
      <button onclick="nextChoice('story2', 1)">Investigate the Strange Noise</button>
      <button onclick="nextChoice('story2', 2)">Go Upstairs to the Attic</button>
      <button onclick="nextChoice('story2', 3)">Open the Mysterious Door</button>
      <button onclick="nextChoice('story2', 4)">Look for an Escape Route</button>
      <button onclick="nextChoice('story2', 5)">Search the Library</button>
    `;
  } else if (storyId === 'story3') {
    storyText.textContent = "You've discovered a time machine in your basement, and now you're stuck in the past. What will you do?";
    choicesDiv.innerHTML = `
      <button onclick="nextChoice('story3', 1)">Speak to a Person in the Past</button>
      <button onclick="nextChoice('story3', 2)">Explore the Local Village</button>
      <button onclick="nextChoice('story3', 3)">Try to Fix the Time Machine</button>
      <button onclick="nextChoice('story3', 4)">Hide from the Authorities</button>
      <button onclick="nextChoice('story3', 5)">Search for a Way Back to the Present</button>
    `;
  }
}

// Function to move to the next choice in the story
function nextChoice(storyId, choice) {
  const storyText = document.getElementById('storyText');
  const choicesDiv = document.getElementById('choices');
  
  if (storyId === 'story1') {
    if (choice === 1) {
      storyText.textContent = "You cross the river but encounter a wild animal. What will you do?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story1', 6)">Fight the Animal</button>
        <button onclick="nextChoice('story1', 7)">Run Away</button>
      `;
    } else if (choice === 2) {
      storyText.textContent = "The cave is dark, and you hear strange noises. Do you venture deeper?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story1', 8)">Go Deeper</button>
        <button onclick="nextChoice('story1', 9)">Leave the Cave</button>
      `;
    } else if (choice === 3) {
      storyText.textContent = "Following the trail, you find a hidden entrance. Will you enter?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story1', 10)">Enter the Entrance</button>
        <button onclick="nextChoice('story1', 11)">Continue on the Trail</button>
      `;
    } else if (choice === 4) {
      storyText.textContent = "The mountain path is steep, but the view is breathtaking. Will you continue climbing?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story1', 12)">Climb Higher</button>
        <button onclick="nextChoice('story1', 13)">Turn Back</button>
      `;
    } else if (choice === 5) {
      storyText.textContent = "You find some supplies, but the trail splits. Which way will you go?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story1', 14)">Go Left</button>
        <button onclick="nextChoice('story1', 15)">Go Right</button>
      `;
    }
  } else if (storyId === 'story2') {
    if (choice === 1) {
      storyText.textContent = "You find the source of the noise - a hidden trap door. Will you open it?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story2', 6)">Open the Trap Door</button>
        <button onclick="nextChoice('story2', 7)">Leave it Closed</button>
      `;
    } else if (choice === 2) {
      storyText.textContent = "The attic is dark and dusty. You find an old chest. Will you open it?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story2', 8)">Open the Chest</button>
        <button onclick="nextChoice('story2', 9)">Leave the Attic</button>
      `;
    } else if (choice === 3) {
      storyText.textContent = "Behind the mysterious door, you find a long hallway. Do you enter?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story2', 10)">Enter the Hallway</button>
        <button onclick="nextChoice('story2', 11)">Stay Outside</button>
      `;
    } else if (choice === 4) {
      storyText.textContent = "You search for an escape route, but all windows are locked. What now?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story2', 12)">Break a Window</button>
        <button onclick="nextChoice('story2', 13)">Look for an Exit Door</button>
      `;
    } else if (choice === 5) {
      storyText.textContent = "In the library, you find an old book with strange symbols. Will you read it?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story2', 14)">Read the Book</button>
        <button onclick="nextChoice('story2', 15)">Leave the Library</button>
      `;
    }
  } else if (storyId === 'story3') {
    if (choice === 1) {
      storyText.textContent = "You speak to a person from the past, but they seem suspicious. Do you trust them?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story3', 6)">Trust Them</button>
        <button onclick="nextChoice('story3', 7)">Don't Trust Them</button>
      `;
    } else if (choice === 2) {
      storyText.textContent = "You explore the local village and see a market with strange items. Will you approach?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story3', 8)">Approach the Market</button>
        <button onclick="nextChoice('story3', 9)">Stay Away</button>
      `;
    } else if (choice === 3) {
      storyText.textContent = "You try to fix the time machine, but something seems to be missing. What will you do?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story3', 10)">Search for Missing Parts</button>
        <button onclick="nextChoice('story3', 11)">Ask for Help</button>
      `;
    } else if (choice === 4) {
      storyText.textContent = "You hide from the authorities but soon realize that someone is following you. What now?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story3', 12)">Confront Them</button>
        <button onclick="nextChoice('story3', 13)">Run Away</button>
      `;
    } else if (choice === 5) {
      storyText.textContent = "You search for a way back to the present but find no clear solution. Will you keep looking?";
      choicesDiv.innerHTML = `
        <button onclick="nextChoice('story3', 14)">Keep Searching</button>
        <button onclick="nextChoice('story3', 15)">Give Up</button>
      `;
    }
  }
}

// Back button functionality
function goBack() {
  document.querySelector('main').style.display = 'block';
  document.getElementById('story-screen').style.display = 'none';
}
