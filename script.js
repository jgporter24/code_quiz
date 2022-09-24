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
    
        // answer check, if else statements
        if (questionSource[questionNumber].answer == event.target.value) {
            checkRslt.textContent = "Awesome!"; 
            totalScore = totalScore + 1;
    
        } else {
            secondsLeft = secondsLeft - 10;
            checkRslt.textContent = "Oops! The correct answer is " + questionSource[questionNumber].answer + " .";
        }
             //show another question
        if (questionNumber < questionSource.length -1 ) {
        // call showQuestions to bring in next question when any reactBtn is clicked
            showQuestion(questionNumber +1);
        } else {
        gameOver();
    }
    questionCount++;
    }
        // Game is over
    function gameOver() {
    
            questionPage.style.display = "none";
            gradeBoard.style.display = "block";
            console.log(gradeBoard);
            // show end score
            endScore.textContent = "Your total score is :" + totalScore ;
            // clearInterval(timerInterval);  
            timeLeft.style.display = "none"; 
    };
    
    // get current score and initials from local storage
    function getScore () {
        var currentList =localStorage.getItem("ScoreList");
        if (currentList !== null ){
            freshList = JSON.parse(currentList);
            return freshList;
        } else {
            freshList = [];
        }
        return freshList;
    };
    
    
    // render score to the score board
    function renderScore () {
        scoreRecord.innerHTML = "";
        scoreRecord.style.display ="block";
        var highScores = sort();   
        // Slice the high score array to only show the top five high scores. 
        var topFive = highScores.slice(0,5);
        for (var i = 0; i < topFive.length; i++) {
            var item = topFive[i];
        // Show the score list on score board
        var li = document.createElement("li");
        li.textContent = item.user + " - " + item.score;
        li.setAttribute("data-index", i);
        scoreRecord.appendChild(li);
        }
    };
    
    // sort score and ranking the highscore list
    function sort () {
        var unsortedList = getScore();
        if (getScore == null ){
            return;
        } else{
        unsortedList.sort(function(a,b){
            return b.score - a.score;
        })
        return unsortedList;
    }};
    
    // push new score and initial to the local storage
    function addItem (n) {
        var addedList = getScore();
        addedList.push(n);
        localStorage.setItem("ScoreList", JSON.stringify(addedList));
    };
    
    function saveScore () {
        var scoreItem ={
            user: userInitial.value,
            score: totalScore
        }
        addItem(scoreItem);
        renderScore();
    }
    
    // Add event listeners
    // startbtn to start the quiz
    startBtn.addEventListener("click", startQuiz);
    
    //click any choices button, go to the next question
    reactButtons.forEach(function(click){
    
        click.addEventListener("click", checkAnswer);
    });
    
    //save information and go to next page
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        gradeBoard.style.display = "none";
        introPage.style.display = "none";
        highScorePage.style.display = "block";
        questionPage.style.display ="none";
        saveScore();
    });
    
    // check highscore ranking list
    scoreCheck.addEventListener("click", function(event) {
        event.preventDefault();
        gradeBoard.style.display = "none";
        introPage.style.display = "none";
        highScorePage.style.display = "block";
        questionPage.style.display ="none";
        renderScore();
    });
    
    //go back to main page
    backBtn.addEventListener("click",function(event){
            event.preventDefault();
            gradeBoard.style.display = "none";
            introPage.style.display = "block";
            highScorePage.style.display = "none";
            questionPage.style.display ="none";
            location.reload();
    });
    
    //clear local storage and clear page shows
    clearBtn.addEventListener("click",function(event) {
        event.preventDefault();
        localStorage.clear();
        renderScore();
    });