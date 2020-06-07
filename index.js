
//Detecting Which sound to play depending on key or button press
function letterCheck(key){

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3").play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3").play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3").play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3").play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3").play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3").play();
      break

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3").play();
      break;


    default: console.log(buttonInnerHTML);
  }
}



//Detecting Button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++ ){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    letterCheck(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


// Detecting key press
document.addEventListener("keydown", function(event) {

  letterCheck(event.key);
  buttonAnimation(event.key);
});


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100);

}
