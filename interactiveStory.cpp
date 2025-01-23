#include <iostream>
#include <string>
#include <map>

void displayOptions(const std::map<std::string, int>& options) {
    std::cout << "Available options:\n";
    for (const auto& [option, _] : options) {
        std::cout << "- " << option << "\n";
    }
}

int main() {
    struct StoryStep {
        std::string text;
        std::map<std::string, int> options;
    };

    // Story data
    StoryStep story[] = {
        {"You wake up in a dark forest. There's a path ahead and a cave to your left. What would you like to do?",
         {{"take the path", 1}, {"enter the cave", 2}}},
        {"You follow the path and find a small village. Would you like to explore the village or continue walking?",
         {{"explore the village", 3}, {"continue walking", 4}}},
        {"The cave is dark and damp. You hear a growl deeper inside. Would you like to investigate or leave the cave?",
         {{"investigate", 5}, {"leave the cave", 1}}},
        {"The villagers welcome you and offer food. You learn about a treasure hidden nearby. Would you like to search for it or rest for the night?",
         {{"search for the treasure", 6}, {"rest for the night", 7}}},
        {"You keep walking and find yourself at a crossroads. Would you like to go left or right?",
         {{"go left", 8}, {"go right", 9}}},
        {"You encounter a fierce dragon! Would you like to fight or flee?",
         {{"fight", 10}, {"flee", 1}}},
        {"You search for the treasure and find a hidden chest filled with gold. Congratulations! The adventure ends here.",
         {}},
        {"You rest for the night and wake up feeling refreshed. The adventure ends here.",
         {}},
        {"The left path leads to a serene lake. You relax and enjoy the peaceful surroundings. The adventure ends here.",
         {}},
        {"The right path leads to a dense jungle. You decide to turn back for safety. The adventure ends here.",
         {}},
        {"You bravely fight the dragon and emerge victorious. The villagers celebrate your heroism. The adventure ends here.",
         {}}
    };

    int currentStep = 0;
    std::string choice;

    while (true) {
        const StoryStep& step = story[currentStep];
        std::cout << step.text << "\n";

        if (step.options.empty()) {
            std::cout << "The story has ended. Thanks for playing!\n";
            break;
        }

        displayOptions(step.options);
        std::cout << "Enter your choice: ";
        std::getline(std::cin, choice);

        if (choice == "stop") {
            std::cout << "Thank you for playing!\n";
            break;
        } else if (step.options.find(choice) != step.options.end()) {
            currentStep = step.options.at(choice);
        } else {
            std::cout << "Invalid choice. Please try again.\n";
        }
    }

    return 0;
}
