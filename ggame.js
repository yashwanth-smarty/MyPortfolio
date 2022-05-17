// Guessing Game
function newnum(){
  location.reload();
} 
var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var msg3 = document.getElementById("msg3");
var numb = Math.floor(Math.random()*100) + 1;
var nguesses = 0;
var allguesses = [];
function gfunc(){
  var gnum = document.getElementById("gnumber").value;
  if(gnum < 1 || gnum > 100){
    alert("Please Enter a number between 1 to 100!")
  }
  else{
    allguesses.push(gnum);
    nguesses += 1;
    if(gnum < numb){
      msg1.style.color = "red";
      msg1.textContent ="Your Guess is too Low!";
      msg2.textContent = "No. Of Guesses : " + nguesses;
      msg3.textContent = "Guessed Numbers are : " + allguesses;
    }
    else if(gnum > numb){
      msg1.style.color = "yellow";
      msg1.textContent ="Your Guess is too High!";
      msg2.textContent = "No. Of Guesses : " + nguesses;
      msg3.textContent = "Guessed Numbers are : " + allguesses;
    }
    else if(gnum == numb){
      msg1.style.color = "green";
      msg1.style.fontWeight = "bold";
      msg1.textContent ="HURRAY! You Got it";
      msg2.textContent = "The number was " + numb;
      msg3.textContent = "You Guessed it in " + nguesses + " chances";
    }
  }
}