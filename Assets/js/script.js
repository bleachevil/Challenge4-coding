// Selects element by class
var timeEl = document.getElementById('time');

var secondsLeft = 75;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        //localStorage.setItem('secondsLeft', secondsLeft)
      secondsLeft--;
      timeEl.textContent = "Time:" + secondsLeft ;

      
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
      }
  
    }, 1000); //millsecond
  }

setTime();