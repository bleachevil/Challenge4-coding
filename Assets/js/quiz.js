var quizEl = document.querySelector('.quiz');
var lossCount = 0;
var winCount = 0;
const questions = [{
  name: 'How many inches in a foot?', answer: '2',
  options: [{ title: '3' }, { title: '2' }, { title: '12' }, { title: '36' } ]
}, {
  name: 'How tall is the Eiffel Tower?', answer: '308',
  options: [{ title: '308' }, { title: '324' }, { title: '352' }, { title: '463' } ]
}, {
    name: 'What Is The Year Of Next Year?', answer: '2023',
    options: [{ title: '2020' }, { title: '2021' }, { title: '2022' }, { title: '2023' } ]
  }, {
    name: 'How Many Month In A Year?', answer: '12',
    options: [{ title: '11' }, { title: '8' }, { title: '12' }, { title: '13' } ]
  }, {
    name: 'How Many Week In a Month?', answer: '4',
    options: [{ title: '1' }, { title: '2' }, { title: '3' }, { title: '4' } ]
  }];
var currentQuestion = 0;
var lastQuestion = questions.length - 1;

const renderQuestion = () => {
  const question = questions[currentQuestion];
  const msg = document.getElementById('message');

  quizEl.innerHTML = `
    <h2>${question.name}</h2>
    <form id="myForm">

        <div class="submit" id="C0" name="option" onclick="checkAnswer(${question.options[0].title})">${question.options[0].title}</div><br>
        <div class="submit" id="C1" name="option" onclick="checkAnswer(${question.options[1].title})">${question.options[1].title}</div><br>
        <div class="submit" id="C2" name="option" onclick="checkAnswer(${question.options[2].title})">${question.options[2].title}</div><br>
        <div class="submit" id="C3" name="option" onclick="checkAnswer(${question.options[3].title})">${question.options[3].title}</div><br>


        <p id="message"></p>


    </form> 
  `;

}


// Selects element by class
var timeEl = document.getElementById('time');

var secondsLeft = 60;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        localStorage.setItem('secondsLeft', secondsLeft)
      secondsLeft--;
      timeEl.textContent = "Time:" + secondsLeft ;
    
    //   if (msg == "Incorrect") {
    //       secondsLeft = secondsLeft - 2
    //   }
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        document.location.href = "final.html";
        clearInterval(timerInterval);
        // Calls function to create and append image
      }
  
    }, 1000); //millsecond
  }


setTime();

var currentTime = localStorage.getItem("secondsLeft");
 


// counter

// function Counter(){
//     if(currentTime <= secondsLeft ){
//         answerIsWrong();
//         currentTime = currentTime - 10;
//         localStorage.setItem('secondsLeft', currentTime)
        
//     }else{
//         // end the quiz and show the score
//         document.location.href = "final.html";
//         }
//     }



function checkAnswer(answer){
    if( answer == questions[currentQuestion].answer){
        // answer is correct
        //score++;
        // change progress color to green
        

        if(currentQuestion < lastQuestion && currentTime <= secondsLeft){
            currentQuestion++;
            renderQuestion();
            answerIsCorrect();}
        else {
            document.location.href = "final.html"
        }
    }else{
        // answer is wrong
        // change progress color to red
        

        if(currentQuestion < lastQuestion && currentTime <= secondsLeft){
            currentQuestion++;
            renderQuestion();
            answerIsWrong();
        } else {document.location.href = "final.html"}
    }
}


// answer is correct
function answerIsCorrect(){
    const msg = document.getElementById('message');
    msg.innerHTML = "Correct";
    winCount++;
    console.log(winCount);
    localStorage.setItem("Correct",winCount)
    //localStorage.getItem(secondsLeft)

    
}

// answer is Wrong
function answerIsWrong(){
    const msg = document.getElementById('message');
    var currentTime = localStorage.getItem("secondsLeft");
    msg.innerHTML = "Incorrect";
    lossCount++;
    console.log(lossCount);
    localStorage.setItem("Incorrect",lossCount)
    secondsLeft = currentTime - 10;
    localStorage.setItem('secondsLeft', secondsLeft)
}




renderQuestion();

localStorage.clear();
