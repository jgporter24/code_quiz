//Define variables
    var welcome = document.querySelector("#introduction");
    var startBtn = document.querySelector("#button_start");
    var introPage =document.querySelector("#intro");
    
    var questionPage = document.querySelector("#question_page");
    var askQuestion = document.querySelector("#ask_question");
    
    var reactButtons = document.querySelectorAll(".choices");
    var answerBtn1 = document.querySelector("#answer1");
    var answerBtn2 = document.querySelector("#answer2");
    var answerBtn3 = document.querySelector("#answer3");
    var answerBtn4 = document.querySelector("#answer4");
    
    var checkRslt = document.querySelector("#check_result");
    var gradeBoard = document.querySelector("#outcome_page");
    var endScore = document.querySelector("#total_score");
    var userInitial =document.querySelector("#initial");
    
    var submitBtn =document.querySelector("#submit_btn");
    var highScorePage =document.querySelector("#highscore");
    var scoreRecord =document.querySelector("#score_record");
    var scoreCheck =document.querySelector("#check_score");
    var finish =document.querySelector("#finish");
    
    var backBtn =document.querySelector("#back_btn");
    var clearBtn=document.querySelector("#clear_btn");
    
        //Define questions
    var questionSource = [
        {
            question: "Questions 1 : Inside which HTML element do we put the JavaScript?",
            choices: ["a. <javascript>", "b. <js>", "c. <script>", "d. <scripting>"],
            answer: "c"
        },
        {
            question: "Questions 2 : How to write an IF statement in JavaScript?",
            choices: ["a. if i == 5 then", "b. if i === 5 then", "c. if i = 5", "d. if(i == 5)"],
            answer: "d"
        },
        {
            question: "Questions 3 : How do you create a function in JavaScript?",
            choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
            answer: "b"
        },
        {
            question: "Questions 4 : How do you call a function named myFunction?",
            choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
            answer: "c"
        },
        {
            question: "Questions 5 : How do you write 'Hello World' in an alert box?",
            choices: ["a. msgBox('Hello World')", "b. alert('Hellow World')", "c. alertBox('Hellow World')", "d. msg('Hellow World')"],
            answer: "b"
        },
        {
            question: "Questions 6 : The first index of an array is ____.",
            choices: ["a. 2", "b. 4", "c. 0", "d. None of the above"],
            answer: "c"
        },
        {
            question: "Questions 7 : Commonly used data types DO NOT include:",
            choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
            answer: "c"
        },
        {
            question: "Questions 8 : Which event occurs when the user clicks on an HTML element?",
            choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
            answer: "a"
        }
    ];
        //Set timer and score variables
    
    var timeLeft = document.getElementById("timer");
    
    var secondsLeft = 75;
    var questionNumber = 0;
    var totalScore = 0;
    var questionCount = 1;

    //Functions
       
    function countdown() {
            
            var timerInterval = setInterval(function () {
    
              secondsLeft--;
              timeLeft.textContent = "Time left: " + secondsLeft + " s";
        
                if (secondsLeft <= 0){
                    clearInterval(timerInterval);
                    timeLeft.textContent = "Time's up!"; 
                    // if time is up, show on score board
                    finish.textContent = "Time's up!";
                    gameOver();
    
                } else  if(questionCount >= questionSource.length +1) {
                    clearInterval(timerInterval);
                    gameOver();
                    } 
        }, 1000);
    }
    
        //Click to start the quiz
    function startQuiz () {
            introPage.style.display = "none";
            questionPage.style.display = "block";
            questionNumber = 0
            countdown();
            showQuestion(questionNumber);
          
    }
        //present the questions and answers
    function showQuestion (n) {
            askQuestion.textContent = questionSource[n].question;
            answerBtn1.textContent = questionSource[n].choices[0];
            answerBtn2.textContent = questionSource[n].choices[1];
            answerBtn3.textContent = questionSource[n].choices[2];
            answerBtn4.textContent = questionSource[n].choices[3];
            questionNumber = n;
        }
    
        //Show if answer is correct or wrong 
    function checkAnswer(event) {
        event.preventDefault();
        //make it display
        checkRslt.style.display = "block";
        setTimeout(function () {
            checkRslt.style.display = 'none';
        }, 1000);
    
        