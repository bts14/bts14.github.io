
function sayThatWasEasy() {
var sound = new Audio("that_was_easy.mp3");
   sound.play(); 

}
$("#easy").on("click", sayThatWasEasy);