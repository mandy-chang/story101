# story101
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Story</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
        }
        form {
            margin-top: 20px;
        }
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Interactive Story</h1>
        <p id="story-text">You wake up in a dark forest. There's a path ahead and a cave to your left. What would you like to do?</p>
        <form id="story-form">
            <label for="choice">What would you like to do?</label>
            <input type="text" id="choice" name="choice" placeholder="Type your choice here...">
            <button type="submit">Submit</button>
        </form>
        <ul id="options">
            <strong>Available options:</strong>
            <li>take the path</li>
            <li>enter the cave</li>
        </ul>
    </div>
    <script>
        const story = [
            {
                text: "You wake up in a dark forest. There's a path ahead and a cave to your left. What would you like to do?",
                options: {"take the path": 1, "enter the cave": 2}
            },
            {
                text: "You follow the path and find a small village. Would you like to explore the village or continue walking?",
                options: {"explore the village": 3, "continue walking": 4}
            },
            {
                text: "The cave is dark and damp. You hear a growl deeper inside. Would you like to investigate or leave the cave?",
                options: {"investigate": 5, "leave the cave": 1}
            },
            {
                text: "The villagers welcome you and offer food. You learn about a treasure hidden nearby. Would you like to search for it or rest for the night?",
                options: {"search for the treasure": 6, "rest for the night": 7}
            },
            {
                text: "You keep walking and find yourself at a crossroads. Would you like to go left or right?",
                options: {"go left": 8, "go right": 9}
            },
            {
                text: "You encounter a fierce dragon! Would you like to fight or flee?",
                options: {"fight": 10, "flee": 1}
            },
            {
                text: "You search for the treasure and find a hidden chest filled with gold. Congratulations! The adventure ends here.",
                options: {}
            },
            {
                text: "You rest for the night and wake up feeling refreshed. The adventure ends here.",
                options: {}
            },
            {
                text: "The left path leads to a serene lake. You relax and enjoy the peaceful surroundings. The adventure ends here.",
                options: {}
            },
            {
                text: "The right path leads to a dense jungle. You decide to turn back for safety. The adventure ends here.",
                options: {}
            },
            {
                text: "You bravely fight the dragon and emerge victorious. The villagers celebrate your heroism. The adventure ends here.",
                options: {}
            }
        ];

        let currentStep = 0;

        document.getElementById("story-form").addEventListener("submit", function(event) {
            event.preventDefault();
            const userChoice = document.getElementById("choice").value.toLowerCase();
            const currentOptions = story[currentStep].options;

            if (userChoice === "stop") {
                document.getElementById("story-text").textContent = "Thank you for playing!";
                document.getElementById("options").innerHTML = "";
                document.getElementById("story-form").remove();
            } else if (userChoice in currentOptions) {
                currentStep = currentOptions[userChoice];
                document.getElementById("story-text").textContent = story[currentStep].text;

                const nextOptions = story[currentStep].options;
                const optionsList = document.getElementById("options");
                optionsList.innerHTML = "";
                if (Object.keys(nextOptions).length > 0) {
                    optionsList.innerHTML = "<strong>Available options:</strong>";
                    for (let option in nextOptions) {
                        optionsList.innerHTML += `<li>${option}</li>`;
                    }
                } else {
                    document.getElementById("story-form").remove();
                }
            } else {
                document.getElementById("story-text").textContent = "Invalid choice. Please choose again.";
            }

            document.getElementById("choice").value = "";
        });
    </script>
</body>
</html>
