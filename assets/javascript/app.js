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
var question = [];
var answer1 = [];
var answer2 = [];
var answer3 = [];
var answer4 = [];
var answer5 = [];
var answer6 = [];
var answer7 = [];
var answer8 = [];
var answer9 = [];
var answer0 = [];

var startGame = false;
var timer = "";
var rightAnswer = "";
var wrongAnswer = "";
var playerAnswer = "";