//Player will be presented with a "New Game" button
//When game starts:
//First question and its possible answers appear on screen
//Timer on screen starts counting down (10 seconds)
//When player clicks the correct answer, the number of correct answers increments by 1, the correct answer is highlighted for a few seconds, and the next question and answer set appears
//When player clicks the wrong answer, or the clock reaches zero, the number of incorrect answers increments by 1, the correct answer is highlighted for a few seconds, the answer clicked is highlighted in a different color for a few seconds, and the next question and answer set appears
//When correctAnswers + wrongAnswers == 10, the game ends and displays the final score
//The next game does not start until the player clicks the New Game button

//Global Variables
const questions = [
    {
        question: "What is the Meric name of the Corrupted People?",
        answers: ["Altmer", "Dunmer", "Falmer", "Orsimer"],
        rightAnswer: 3
    },

    {
        question: "What type of Soul Gem can be used to capture human souls?",
        answers: ["Greater", "Black", "Human", "Gold"],
        rightAnswer: 1
    },

    {
        question: "Who was the Nordic conqueror who first came to Skyrim with 500 Companions?",
        answers: ["Tiber Septim", "Kodlak Whitemane", "Ysgramor", "Sybille Stentor"],
        rightAnswer: 2
    },

    {
        question: "What is the name of the half-elven, half-human race that can resist 25% of magical damage?",
        answers: ["Breton", "Nord", "Redguard", "Imperial"],
        rightAnswer: 0
    },

    {
        question: "What organization was responsible for the death of Emperor Titus Mede III?",
        answers: ["The Thieves' Guild", "The Dark Brotherhood", "The Morag Tong", "The Dawnguard"],
        rightAnswer: 1
    },

    {
        question: "Who was the Dragon Priest trapped under Labyrinthian by Savos Aren?",
        answers: ["Morokei", "Konahrik", "Ahzidal", "Cyrodil"],
        rightAnswer: 0
    },

    {
        question: "Which school of magic is unique, in that the Nords of Skyrim regard it with respect?",
        answers: ["Conjuration", "Enchanting", "Alteration", "Restoration"],
        rightAnswer: 3
    },

    {
        question: "Where is the homeland of the feline race known as the Khajiit?",
        answers: ["Atmora", "Elsweyr", "Black Marsh", "Valenwood"],
        rightAnswer: 1
    },

    {
        question: "What material can be used to improve the Dwemer artifact Volendrung?",
        answers: ["Moonstone", "Steel", "Ebony", "Malachite"],
        rightAnswer: 2
    }
];

var currentQuestion = '';

var answerA = '';
var answerB = '';
var answerC = '';
var answerD = '';

var newGame = '';
var newGameButton = document.getElementById("#start-btn");
var timer = "";
var rightAnswers = "";
var wrongAnswers = "";
var playerAnswer = "";

var questionCounter = 0;

//display first question
//var questionsLeft = questions.length;
//currentQuestion = questions[0];

var startGame = function() {
    $("#start-btn").remove();

    currentQuestion = questions[0];

    console.log(currentQuestion.question);
    console.log(currentQuestion.answers);
    console.log(currentQuestion.rightAnswer);

    $('.question-bar').append(currentQuestion.question);
    $('.answer-block').append("<button class='answer-buttons' id='answer-A'>" + currentQuestion.answers[0] + "</button>" + "<br>");
    $('.answer-block').append("<button class='answer-buttons' id='answer-B'>" + currentQuestion.answers[1] + "</button>" + "<br>");
    $('.answer-block').append("<button class='answer-buttons' id='answer-C'>" + currentQuestion.answers[2] + "</button>" + "<br>");
    $('.answer-block').append("<button class='answer-buttons' id='answer-D'>" + currentQuestion.answers[3] + "</button>" + "<br>");
};

$("#start-btn").on("click", function() {
    startGame();
    });
//Function to start game:
//On click new game button to execute
//populate question-bar and answer-block with first question
//show countdown timer at 10 seconds

//Function to move to next question
//Increment rightAnswers or wrongAnswers by one
//Increment questions index by one
//Empty question-bar and answer-block
//Reset countdown timer to 10 seconds
//Populate question-bar and answer-block with next question

//If playerAnswer==rightAnswer, highlight rightAnswer for two seconds, increment rightAnswers then execute function to move to next question
//If playerAnswer!=rightAnswer, highlight rightAnswer in green and playerAnswer in red for two seconds, increment wrongAnswers, then execute function to move to next question
//If countdown timer reaches 0, display "Time's Up!" under answer-block for two seconds, increment wrongAnswers then execute function to move to next question

//Timer

//endGame Function:
//Once next question function has executed 9 times (+first question)
//Empty question-bar and answer-block
//display rightAnswers and wrongAnswers
//create new game button