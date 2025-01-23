from flask import Flask, render_template, request

app = Flask(_name_)

# Story state
story_state = {
    "step": 0,
    "text": "",
    "options": []
}

# Story content
story = [
    {
        "text": "You wake up in a dark forest. There's a path ahead and a cave to your left. What would you like to do?",
        "options": {"take the path": 1, "enter the cave": 2}
    },
    {
        "text": "You follow the path and find a small village. Would you like to explore the village or continue walking?",
        "options": {"explore the village": 3, "continue walking": 4}
    },
    {
        "text": "The cave is dark and damp. You hear a growl deeper inside. Would you like to investigate or leave the cave?",
        "options": {"investigate": 5, "leave the cave": 1}
    },
    {
        "text": "The villagers welcome you and offer food. You learn about a treasure hidden nearby. Would you like to search for it or rest for the night?",
        "options": {"search for the treasure": 6, "rest for the night": 7}
    },
    {
        "text": "You keep walking and find yourself at a crossroads. Would you like to go left or right?",
        "options": {"go left": 8, "go right": 9}
    },
    {
        "text": "You encounter a fierce dragon! Would you like to fight or flee?",
        "options": {"fight": 10, "flee": 1}
    },
    {
        "text": "You search for the treasure and find a hidden chest filled with gold. Congratulations! The adventure ends here.",
        "options": {}
    },
    {
        "text": "You rest for the night and wake up feeling refreshed. The adventure ends here.",
        "options": {}
    },
    {
        "text": "The left path leads to a serene lake. You relax and enjoy the peaceful surroundings. The adventure ends here.",
        "options": {}
    },
    {
        "text": "The right path leads to a dense jungle. You decide to turn back for safety. The adventure ends here.",
        "options": {}
    },
    {
        "text": "You bravely fight the dragon and emerge victorious. The villagers celebrate your heroism. The adventure ends here.",
        "options": {}
    }
]

@app.route("/")
def home():
    global story_state
    story_state = {"step": 0, "text": story[0]["text"], "options": story[0]["options"]}
    return render_template("index.html", story_state=story_state)

@app.route("/next", methods=["POST"])
def next_step():
    global story_state
    user_choice = request.form.get("choice")
    if user_choice.lower() == "stop":
        story_state = {"step": -1, "text": "Thank you for playing!", "options": {}}
    elif user_choice in story[story_state["step"]]["options"]:
        next_step = story[story_state["step"]]["options"][user_choice]
        story_state = {"step": next_step, "text": story[next_step]["text"], "options": story[next_step]["options"]}
    else:
        story_state["text"] = "Invalid choice. Please choose again."
    return render_template("index.html", story_state=story_state)
