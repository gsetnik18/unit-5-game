//Player will be presented with a "New Game" button
//When game starts:
//First question and its possible answers appear on screen
//Timer on screen starts counting down (10 seconds)
//When player clicks the correct answer, the number of correct answers increments by 1, the correct answer is highlighted for a few seconds, and the next question and answer set appears
//When player clicks the wrong answer, or the clock reaches zero, the number of incorrect answers increments by 1, the correct answer is highlighted for a few seconds, the answer clicked is highlighted in a different color for a few seconds, and the next question and answer set appears
//When correctAnswers + wrongAnswers == 10, the game ends and displays the final score
//The next game does not start until the player clicks the New Game button

//Global Variables
var questions = [
    {
        question: "What is the Meric name of the Corrupted People?",
        answers: ["Altmer", "Dunmer", "Falmer", "Orsimer"],
        rightAnswer: "Orsimer"
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

var firstQuestion = '';
var currentQuestion = 0;

var newGame = '';
var timer = "";
var rightAnswers = "";
var wrongAnswers = "";
var playerAnswer = "";

var questionCounter = 0;

var startGame = function () {

    //removes the New Game button to make way for the first question
    $(".start-button").remove();
};

$(".start-button").on("click", function () {
    //here we are calling the function that removes the New Game button
    startGame();
    //here we call the function that displays the first question
    renderQuestion();
    //startTimer();
    resetTimer();

});

//listens for a button click within the answer block
$(".answer-block").on("click", ".answer-buttons", function () {
    console.log("Hello World");
    var answer = $(this).text();
    console.log(answer);
    answerCheck(answer);

    nextQuestion();
});

function answerCheck(answer) {
    if (answer === questions[currentQuestion].rightAnswer) {
        console.log("Correct!");
        //function to display the correct answer as green and the wrong answer, if clicked, as red, for three seconds,
        //before running the nextQuestion function again

    }
}
//this function finds the current index of the question array, and displays its contents
var renderQuestion = function () {
    
    var question = questions[currentQuestion];
    console.log(question);

    $('.question-bar').append(question.question);
    for (var i = 0; i < question.answers.length; i++) {

        $('.answer-block').append("<button class='answer-buttons'>" + question.answers[i] + "</button>" + "<br>");

    }
};

var nextQuestion = function () {

    //this removes the current question and possible answers after it has been answered
    $(".question-bar").empty();
    $(".answer-block").empty();

    //increments the index of the array by one, then calls the function again to bring in the next question
    currentQuestion++;
    renderQuestion();
    resetTimer();

};
//function to display the correct answer as green and the wrong answer, if clicked, as red, for three seconds,
//before running the nextQuestion function again

//this displays our timer, which counts down from 30. If an answer is not clicked on before it reaches 0,
//the next question will automatically display, and the wrongAnswers will increment by 1
var timeLeft = 30;
var elem = document.getElementById('game-timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        nextQuestion();
        resetTimer();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
};

function resetTimer(){
    timeLeft = 30;
}
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