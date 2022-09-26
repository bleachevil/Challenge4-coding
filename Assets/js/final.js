var finalScore = document.getElementById('finalscore');

function totalscore() {
    
    var currentScore = localStorage.getItem("Correct");
    currentScore = currentScore * 10;
    console.log(currentScore);
    finalScore.textContent = "Your final score is:" + currentScore;
}

totalscore();

var signUpButton = document.querySelector("#submit");

signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var fname = document.querySelector("#fname").value;
    var currentScore = localStorage.getItem("Correct");
    currentScore = currentScore * 10;
    if (fname === "") {
       window.alert("Initals cannot be blank");
    } 
    
      localStorage.setItem("score", "1. " + fname + "-" + currentScore);
      document.location.href = "highscores.html";
    }
  );

