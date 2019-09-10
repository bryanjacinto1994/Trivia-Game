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
//Create a function that will reset the game.
//Create a start button function that will execute the game.

var time = 15;
var quizNum = 0;
var correctAnswers = 0;
var intervalId;

var questionOne =
{
    question: $("#question").html("What is the name of the Sensei that taught Naruto how to use 'Rasengan'?"),
    choice1:$("#choice").html("Kakashi"),
    choice2:$("#answer").html("Jiraya"),
    choice3:$("#choice").html("Iruka"),
    choice4:$("#choice").html("Minato"),
}

var questionTwo =
{
    question: $("#question").html("Who did Naruto end up dating?"),
    choice1:$("#choice").html("Tsunade"),
    choice2:$("#choice").html("Sakura"),
    choice3:$("#choice").html("Tenten"),
    choice4:$("#answer").html("Hinata"),
}

var questionThree = 
{
    question: $("#question").html("What is the name of the character that eats alot to enhance his powers?"),
    choice1:$("#answer").html("Choji"),
    choice2:$("#choice").html("Naruto"),
    choice3:$("#choice").html("Itachi"),
    choice4:$("#choice").html("Boruto"),
}

var questionFour = 
{
    question: $("#question").html("Which character resembles the same features as the famous real-life martial artist, 'Bruce Lee'?"),
    choice1:$("#choice").html("Guy"),
    choice2:$("#choice").html("Sasuke"),
    choice3:$("#answer").html("Rock"),
    choice4:$("#choice").html("Gaara"),
}

var questionFive = 
{
    question: $("#question").html("What is the name of the Nine-Tailed Fox that is sealed in Naruto's body?"),
    choice1:$("#choice").html("Shukaku"),
    choice2:$("#answer").html("Kurama"),
    choice3:$("#choice").html("Isobu"),
    choice4:$("#choice").html("Matatabi"),
}

var questionSix =
{
    question: $("#question").html("In what year was the Naruto Manga published?"),
    choice1:$("#choice").html("1994"),
    choice2:$("#answer").html("1997"),
    choice3:$("#choice").html("2001"),
    choice4:$("#choice").html("2007"),
}

var questionSeven =
{
    question:$("#restart").html("Restart Quiz?"),
    choice1:'',
    choice2:'',
    choice3:'',
    choice4:'',
}

var triviaQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];

function timeConverter(t){
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    return seconds;
};

function timeStart(){
    time = 15;
    clearInterval(intervalId);
    intervalId = setInterval(timesUp, 1000);
}

function timesUp(){
    time -=1;
    var translateTime = timeConverter(time);
    $("#time").html(translateTime + " seconds");
    if (time === 0){
        $("#results").html("Times up! You are too slow to be a Ninja!")
        quizNum += 1;
        clearInterval(intervalId);
        setTimeout(showNextQuestion, 1500);
        setTimeout(timeStart, 1500);
    }

}