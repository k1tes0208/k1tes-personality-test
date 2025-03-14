const questions = [
    {
        question: "Your plane touches down in a new country. What's the first thing you do?",
        answers: ["Head straight to the markets", "Find a cozy café", "Book a unique experience", "Research nightlife spots"],
        result: ["Explorer", "Observer", "Adventurer", "Connector"]
    },
    {
        question: "While wandering, you get invited to a secret event only locals know about. What's your reaction?",
        answers: ["Absolutely!", "Need more details", "Only if a friend joins", "Prefer to stick to plan"],
        result: ["Explorer", "Observer", "Adventurer", "Connector"]
    },
    {
        question: "The local food scene is buzzing. What’s your approach?",
        answers: ["Try everything!", "Stick to what looks good", "Prefer local recommendations", "Stick to what I know"],
        result: ["Explorer", "Observer", "Adventurer", "Connector"]
    },
    {
        question: "You get the chance to extend your trip. What do you choose?",
        answers: ["Cultural deep dive", "Luxury retreat", "Thrilling adventure", "Networking trip"],
        result: ["Explorer", "Observer", "Adventurer", "Connector"]
    },
    {
        question: "Looking back on your journey, what moment stands out?",
        answers: ["Unexpected encounters", "Quiet reflection", "Challenges overcome", "New connections"],
        result: ["Explorer", "Observer", "Adventurer", "Connector"]
    }
];

let currentQuestionIndex = 0;
const answersCount = { "Explorer": 0, "Observer": 0, "Adventurer": 0, "Connector": 0 };

function loadQuestion() {
    const questionTitle = document.getElementById("question-title");
    const optionsDiv = document.getElementById("options");
    
    if (currentQuestionIndex >= questions.length) {
        const finalResult = Object.keys(answersCount).reduce((a, b) => answersCount[a] > answersCount[b] ? a : b);
        window.location.href = `result.html?type=${finalResult}`;
        return;
    }
    
    const questionData = questions[currentQuestionIndex];
    questionTitle.textContent = questionData.question;
    optionsDiv.innerHTML = "";
    
    questionData.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => {
            answersCount[questionData.result[index]]++;
            currentQuestionIndex++;
            loadQuestion();
        };
        optionsDiv.appendChild(button);
    });
}

window.onload = loadQuestion;
