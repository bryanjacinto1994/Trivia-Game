//Make a variable that keeps the time count with intervalId, correctAnswers, current number page.
//Make a variable of each questions that includes questions and answer choices.
//Create a time converter for seconds.
//Create a time count down with setIntervals.
//Create a time count down with a statement if the time reaches "0" that will move on to the next question.
//Create a function that displays the questions.
//Create a function that will automatically display the next question.
//Create a function that will increment correct answers by 1 and shows a image that you are correct.
//Hint: Make sure to use clearInterval and setTimeout to go to next question.
//Create a function that will show wrong answer with image and move on to the next question.
//Create a start button function that will execute the game.
//Create a function that will reset the game.
$(document).ready(function () {
    var time = 15;
    var quizNum = 0;
    var correctAnswers = 0;
    var intervalId;

    var questionOne =
    {
        question: '<div id="question">What is the name of the Sensei that taught Naruto how to use "Rasengan"?</div>',
        choice1: '<div class="option">Kakashi</div>',
        choice2: '<div id="answer">Jiraya</div>',
        choice3: '<div class="option">Iruka</div>',
        choice4: '<div class="option">Minato</div>',
    }

    var questionTwo =
    {
        question: '<div id="question">Who did Naruto end up dating?</div>',
        choice1: '<div class="option">Tsunade</div>',
        choice2: '<div class="option">Sakura</div>',
        choice3: '<div class="option">Tenten</div>',
        choice4: '<div id="answer">Hinata</div>',
    }

    var questionThree =
    {
        question: '<div id="question">What is the name of the character that eats alot to enhance his powers?</div>',
        choice1: '<div id="answer">Choji</div>',
        choice2: '<div class="option">Naruto</div>',
        choice3: '<div class="option">Itachi</div>',
        choice4: '<div class="option">Boruto</div>',
    }

    var questionFour =
    {
        question: '<div id="question">Which character resembles the same features as the famous real-life martial artist, "Bruce Lee"?</div>',
        choice1: '<div class="option">Guy</div>',
        choice2: '<div class="option">Sasuke</div>',
        choice3: '<div id="answer">Rock</div>',
        choice4: '<div class="option">Gaara</div>',
    }

    var questionFive =
    {
        question: '<div id="question">What is the name of the Nine-Tailed Fox that is sealed in Narutos body?</div>',
        choice1: '<div class="option">Shukaku</div>',
        choice2: '<div id="answer">Kurama</div>',
        choice3: '<div class="option">Isobu</div>',
        choice4: '<div class="option">Matatabi</div>',
    }

    var questionSix =
    {
        question: '<div id="question">In what year was the Naruto Manga published?</div>',
        choice1: '<div class="option">1994</div>',
        choice2: '<div id="answer">1997</div>',
        choice3: '<div class="option">2001</div>',
        choice4: '<div class="option">2007</div>',
    }

    var questionSeven =
    {
        question: '<div id="restart">Restart Quiz?</div>',
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
    }

    var triviaQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];

    function timeConverter(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return seconds;
    };

    function timeStart() {
        time = 15;
        clearInterval(intervalId);
        intervalId = setInterval(timesUp, 1000);
    }

    function timesUp() {
        time -= 1;
        var translateTime = timeConverter(time);
        $("#time").html(translateTime + " seconds");
        if (time === 0) {
            $("#results").html("Times up! You are too slow to be a Ninja!")
            quizNum += 1;
            clearInterval(intervalId);
            setTimeout(showNextQuestion, 1500);
            setTimeout(timeStart, 1500);
        }
    }

    function displayQuiz(display) {
        $("#results").html(display.question + display.choice1 + display.choice2 + display.choice3 + display.choice4);
        $("#correctNum").html(correctAnswers + '/6 Correct Answers')
    }

    function showNextQuestion() {
        

        if (quizNum === (triviaQuestions.length - 1)) {
            clearInterval(intervalId);
            displayQuiz(triviaQuestions[quizNum]);
            showCorrectAnswer();
            showWrongAnswer();
            resetGame();
        }
        else {
            timeStart();
            displayQuiz(triviaQuestions[quizNum]);
            showCorrectAnswer();
            showWrongAnswer();
            resetGame();
        }
    }

    function showCorrectAnswer() {
        $("#answer").on("click", function () {
            $("#results").html('You are a Ninja! <br> <img src="./assets/images/correct.gif">')
            correctAnswers += 1;
            clearInterval(intervalId);
            setTimeout(showNextQuestion, 1500);
        });
    }

    function showWrongAnswer() {
        $(".option").on("click", function () {
            $("#results").html('Incorrect! you are not worth to be a Ninja! <br> <img src ="./assets/images/wrong.gif">')
            clearInterval(intervalId);
            setTimeout(showNextQuestion, 1500);
        })
    }

    //This starts the game once button is clicked.
    $("#startGameButton").on("click", function () {
        displayQuiz(triviaQuestions[quizNum]);
        timeStart();
        showCorrectAnswer();
        showWrongAnswer();
        resetGame();
    })

    function resetGame() {
        $("#restart").on("click", function () {
            correctAnswers = 0;
            wrongAnswers = 0;
            quizNum = 0;
            displayQuiz(triviaQuestions[quizNum]);
            clearInterval(intervalId);
            timeStart();
            showCorrectAnswer();
            showWrongAnswer();
            resetGame();
        })
    }


})