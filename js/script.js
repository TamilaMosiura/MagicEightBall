// Magic Eight Ball Responses
const responses = [
    "Yes, definitely!",
    "No, not at all.",
    "Ask again later.",
    "It is certain.",
    "I have doubts.",
    "Outlook good!",
    "Don't count on it.",
    "Signs point to yes."
];

const askButton = document.getElementById('askButton');
const answerDisplay = document.getElementById('answer');
const questionDisplay = document.getElementById('questionDisplay');

const defaultText = "Ask a yes or no question and receive your answer from this Magic Ball!";
const defaultAnswer = "8: Ask a question...";
questionDisplay.textContent = defaultText;
answerDisplay.textContent = defaultAnswer;

// Function to ask the ball
function askBall() {
    const question = prompt("Ask the Magic Eight Ball your yes or no question:");

    // return if user cancels the prompt
    if (question === null) {
        answerDisplay.textContent = defaultAnswer;
        questionDisplay.textContent = defaultText;
        return;
    };

    if (question === "") {
        alert("Magic 8 Ball doesn't understand your question. Please ask again!");
        return;
    }

    questionDisplay.textContent = "Your question: " + question;

    const randomIndex = Math.floor(Math.random() * responses.length);
    const answer = responses[randomIndex];

    answerDisplay.textContent = answer;

    // I found I can use setTimeout to clear the answer run the game again in a loop
    setTimeout(() => {
        answerDisplay.textContent = "";
        questionDisplay.textContent = "";
        askBall();
    }, 1000);
}
