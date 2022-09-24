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
    var finalScore = document.querySelector("#final_score");
    var userInitial =document.querySelector("#initial");
    
    var submitBtn =document.querySelector("#submit_btn");
    var highScorePage =document.querySelector("#highscore_page");
    var scoreRecord =document.querySelector("#score_record");
    var scoreCheck =document.querySelector("#check_score");
    var finish =document.querySelector("#finish");
    
    var backBtn =document.querySelector("#back_btn");
    var clearBtn=document.querySelector("#clear_btn");
    
        //Define questions (Object)
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
       