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
var question = ["What is the Meric name of the Corrupted People?" ,
                "What type of Soul Gem can be used to capture human souls?" ,
                "Who was the Nordic conqueror who first came to Skyrim with 500 Companions?" ,
                "What is the name of the half-elven, half-human race that can resist 25% of magical damage?" ,
                "What organization was responsible for the death of Emperor Titus Mede III?" ,
                "Who was the Dragon Priest trapped under Labyrinthian by Savos Aren?" ,
                "Which school of magic is unique, in that the Nords of Skyrim regard it with respect?" ,
                "Where is the homeland of the feline race known as the Khajiit?" ,
                "Which daedric prince was responsible for the creation of the first vampires?" ,
                "What material can be used to improve the Dwemer artifact Volendrung?"];
var answer1 = ["Altmer" , "Dunmer" , "Falmer" , "Orsimer"];
var answer2 = ["Greater" , "Black" , "Human" , "Gold"];
var answer3 = ["Tiber Septim" , "Kodlak Whitemane" , "Ysgramor" , "Sybille Stentor"];
var answer4 = ["Breton" , "Nord" , "Redguard" , "Imperial"];
var answer5 = ["The Thieves' Guild" , "The Dark Brotherhood" , "The Morag Tong" , "The Dawnguard"];
var answer6 = ["Morokei" , "Konahrik" , "Ahzidal" , "Cyrodil"];
var answer7 = ["Conjuration" , "Enchanting" , "Alteration" , "Restoration"];
var answer8 = ["Atmora" , "Elsweyr" , "Black Marsh" , "Valenwood"];
var answer9 = ["Molag Bal" , "Azura" , "Mehrunes Dagon" , "Malacath"];
var answer0 = ["Moonstone" , "Steel" , "Ebony" , "Malachite"];

var startGame = false;
var timer = "";
var rightAnswer = "";
var wrongAnswer = "";
var playerAnswer = "";

