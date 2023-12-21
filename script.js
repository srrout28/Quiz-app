let userName;
//User name

let qstnSlDisplay = document.querySelector('#qstn-sl-count');
//This variable is to define question serial number.

let displayQstn = document.querySelector('.question-display-board');
let optionA = document.querySelector('#option-a');
let optionB = document.querySelector('#option-b');
let optionC = document.querySelector('#option-c');
let optionD = document.querySelector('#option-d');
let correctAnswer;
// Above are question and answer variables...

let userClickedOption;

let scoreDisplay = document.querySelector('#my-score');
let catagoryHeadingg = localStorage.getItem('catagoryHeading');
let questionCounter = localStorage.getItem("startsl");
let qstnSlCounter = 1;
let wholeQnO;
let timeSpanCount;
let scoreCounter = 0;
let attemptedQuestions = 0;
let saveScore = localStorage.getItem('finalscore',scoreCounter);

let totalTimeTaken = 0;
//Above are variables...

function callUserName(){
  userName = document.querySelector('#input-box').value;
  if(userName == ''){
    alert('Enter a valid user Name');
    document.querySelector('#input-box').innerText = '';
  }else{
  localStorage.setItem("userName", userName);
  document.querySelector('#user-name-here').innerHTML = localStorage.getItem("userName");
  }
}

function selectionOpA(){
  userName = document.querySelector('#input-box').value;
  if(userName == ''){
    document.querySelector('#input-enter').click();
    document.querySelector('.btn-option-A').href = 'index.html';
  }else{
    document.querySelector('#input-enter').click();
    localStorage.setItem('catagoryHeading', 'Pipe And Cisterns');
    localStorage.setItem("startsl", 0);
    questionCounter = localStorage.getItem("startsl");
    qstnSlCounter = 1;
    loadQuestions();
  }
}

function selectionOpB(){
  userName = document.querySelector('#input-box').value;
  if(userName == ''){
    document.querySelector('#input-enter').click();
    document.querySelector('.btn-option-B').href = 'index.html';
  }else{
    document.querySelector('#input-enter').click();
    localStorage.setItem('catagoryHeading', 'Probability');
    localStorage.setItem("startsl", 10);
    questionCounter = localStorage.getItem("startsl");
    qstnSlCounter = 1;
    loadQuestions();
  }
}

function selectionOpC(){
  userName = document.querySelector('#input-box').value;
  if(userName == ''){
    document.querySelector('#input-enter').click();
    document.querySelector('.btn-option-C').href = 'index.html';
  }else{
    document.querySelector('#input-enter').click();
    localStorage.setItem('catagoryHeading', 'Problem on Age');
    localStorage.setItem("startsl", 20);
    questionCounter = localStorage.getItem("startsl");
    qstnSlCounter = 1;
    loadQuestions();
  }
}

function selectionOpD(){
  userName = document.querySelector('#input-box').value;
  if(userName == ''){
    document.querySelector('#input-enter').click();
    document.querySelector('.btn-option-D').href = 'index.html';
  }else{
    document.querySelector('#input-enter').click();
    localStorage.setItem('catagoryHeading', 'Profit and Loss');
    localStorage.setItem("startsl", 30);
    questionCounter = localStorage.getItem("startsl");
    qstnSlCounter = 1;
    loadQuestions();
  }
}
// The above codes are for main page...
//
//


let loadQuestions = () =>{
  document.querySelector('#catagory-heading').innerText = catagoryHeadingg;

  qstnSlDisplay.innerText =qstnSlCounter;

  wholeQnO = qstnAns[questionCounter];

  displayQstn.innerText = wholeQnO.question;
  optionA.innerText = wholeQnO.a;
  optionB.innerText = wholeQnO.b;
  optionC.innerText = wholeQnO.c;
  optionD.innerText = wholeQnO.d;

  correctAnswer = wholeQnO.answer;
  timeSpanCount = 10;
};
//Above function is for load question...
//


//Below datas and functions are for checking correct/wrong answers...
//
function answerCheckera(){
  userClickedOption = document.querySelector('#option-a').value;
  attemptedQuestions++;
  localStorage.setItem('attemptedqstn',attemptedQuestions);

  if (userClickedOption == correctAnswer){
    scoreCounter++;
    localStorage.setItem('finalscore',scoreCounter)
    scoreDisplay.innerText = scoreCounter;
    document.querySelector('#option-a').innerHTML = 'Correct'
    setTimeout(nextQuestion, 750);
  }
  else{
    document.querySelector('#option-a').innerHTML = 'Wrong'
    scoreDisplay.innerText = scoreCounter;
    setTimeout(nextQuestion, 750);
  }
}

function answerCheckerb(){
  userClickedOption = document.querySelector('#option-b').value;
  attemptedQuestions++;
  localStorage.setItem('attemptedqstn',attemptedQuestions);

  if (userClickedOption == correctAnswer){
    scoreCounter++;
    localStorage.setItem('finalscore',scoreCounter)
    scoreDisplay.innerText = scoreCounter;
    document.querySelector('#option-b').innerHTML = 'Correct'
    setTimeout(nextQuestion, 750);
  }
  else{
    document.querySelector('#option-b').innerHTML = 'Wrong'
    scoreDisplay.innerText = scoreCounter;
    setTimeout(nextQuestion, 750);
  }
}

function answerCheckerc(){
  userClickedOption = document.querySelector('#option-c').value;
  attemptedQuestions++;
  localStorage.setItem('attemptedqstn',attemptedQuestions);

  if (userClickedOption == correctAnswer){
    scoreCounter++;
    
    localStorage.setItem('finalscore',scoreCounter)
    scoreDisplay.innerText = scoreCounter;
    document.querySelector('#option-c').innerHTML = 'Correct'
    setTimeout(nextQuestion, 750);
  }
  else{
    document.querySelector('#option-c').innerHTML = 'Wrong'
    scoreDisplay.innerText = scoreCounter;
    setTimeout(nextQuestion, 750);
  }
}

function answerCheckerd(){
  userClickedOption = document.querySelector('#option-d').value;
  attemptedQuestions++;
  localStorage.setItem('attemptedqstn',attemptedQuestions);

  if (userClickedOption == correctAnswer){
    scoreCounter++;
    localStorage.setItem('finalscore',scoreCounter)
    scoreDisplay.innerText = scoreCounter;
    document.querySelector('#option-d').innerHTML = 'Correct'
    setTimeout(nextQuestion, 750);
  }
  else{
    document.querySelector('#option-d').innerHTML = 'Wrong'
    scoreDisplay.innerText = scoreCounter;
    setTimeout(nextQuestion, 750);
  }
}
//Above datas and functions are for checking correct/wrong answers...
//

function nextQuestion(){
  if (qstnSlCounter < 10){
    ++qstnSlCounter;
    ++questionCounter;
  }else{
    qstnSlCounter = 10;
    document.querySelector('#submit-btn').click();
  }
  
  loadQuestions();
}
//Next question function...
//

function PreviousQuestion(){
  if (qstnSlCounter != 0 && qstnSlCounter > 1){
    --qstnSlCounter;
    --questionCounter;
  }else{
    qstnSlCounter = 1;
  }
  loadQuestions();
}
//Previous question function which is terminatted...
//


// loadQuestions();



let timeSpan = ()=>{
  document.querySelector('.time-span').innerHTML = timeSpanCount;
  timeSpanCount--;
  totalTimeTaken++;
  localStorage.setItem('totaltimetaken', totalTimeTaken);
  if (timeSpanCount < 0  && qstnSlCounter < 10){
    // timeSpanCount = 10;
    nextQuestion()
  }
  if(timeSpanCount < -1){
    setTimeout(nextPage, 300);
  }
}
//The above function is for time counter...
//


function nextPage(){
  document.querySelector('#submit-btn').click();
}
//Final page loder function...
//

let theInterval = setInterval(timeSpan, 1000);
// setTimeout (theTimeInterval, 10000);
//
function stopInterval(){
  clearInterval(theInterval);
}
//Above code/function is to clear time interval...



//Below data is for result page...
//

function loadAllData(){
  stopInterval();
  document.querySelector('#name-display').innerText = localStorage.getItem("userName");
  document.querySelector('#attempted-counter').innerText = localStorage.getItem('attemptedqstn') || 0;
  document.querySelector('#un-attempted-counter').innerText = 10-localStorage.getItem('attemptedqstn') || 0;
  document.querySelector('#correct-ans-counter').innerText = saveScore || 0;
  document.querySelector('#wrong-ans-counter').innerText = localStorage.getItem('attemptedqstn')-saveScore;
  document.querySelector('#Percentage-checker').innerText = (saveScore/10)*100;
  document.querySelector('#time-counter').innerText =Math.ceil(localStorage.getItem('totaltimetaken')-(localStorage.getItem('totaltimetaken')*0.105));
}
//Above data loaded in result page...
//

function scoreBoardDel(){
  localStorage.removeItem('attemptedqstn');
  localStorage.removeItem('finalscore');
  localStorage.removeItem('totaltimetaken');
}
// Above function is for Start Again...
//

function gotoHome(){
  localStorage.clear();
};
//Above function is for GOTO HOME Button...