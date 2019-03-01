//Player will be presented with a "New Game" button
//When game starts:
//A countdown clock displays "3", then "2", then "1", then "GO!"
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

var currentQuestion = questions[Math.floor(Math.random() * questions.length)];

var answerA = '';
var answerB = '';
var answerC = '';
var answerD = '';

var startGame = '';
var timer = "";
var rightAnswer = "";
var wrongAnswer = "";
var playerAnswer = "";


startGame = function() {

    $(".question-bar").empty();

    $(".answer-block").empty();
}


for (i = 0; i < 1; i++) {
    currentQuestion = $("<div>");
    answerA = $("<div>");
    answerB = $("<div>");
    answerC = $("<div>");
    answerD = $("<div>");

    question = questions[Math.floor(Math.random()*questions.length)];

    console.log(question);

    $("#current-question").html(questions.question);

    currentQuestion.attr({
        "class": 'current-question',
        "id": 'trivia-question',
        "question-value": (questions.question)
    });
    $(".question-bar").append(currentQuestion);

    $(document).ready(function(){
          $('.current-question').append("<p>Question: </p>" + question);
    });

    answerA.attr({
        "class": 'possible-answer',
        "id": 'answer-a',
        "answer-value": (questions.answers)
    });
    $(".answer-block").append("<p>A: </p>" + answerA);

    answerB.attr({
        "class": 'possible-answer',
        "id": 'answer-b',
        "answer-value": (questions.answers)
    });
    $(".answer-block").append("<p>B: </p>" + answerB);

    answerC.attr({
        "class": 'possible-answer',
        "id": 'answer-c',
        "answer-value": (questions.answers)
    });
    $(".answer-block").append("<p>C: </p>" + answerC);

    answerD.attr({
        "class": 'possible-answer',
        "id": 'answer-d',
        "answer-value": (questions.answers)
    });
    $(".answer-block").append("<p>D: </p>" + answerD);

};

