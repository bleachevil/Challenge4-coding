var high = document.getElementById('high');

function highed() {
    var topscore = localStorage.getItem("score");
        high.textContent =  topscore ;
};

highed();


var clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", function(event) {
    event.preventDefault();

    localStorage.clear();
    highed();
    }
  );