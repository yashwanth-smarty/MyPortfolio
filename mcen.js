 //Morse Code Set
function refresh1(){
      document.getElementById("mcdisplay1").innerHTML = "";
      document.getElementById("alpha").value = "";
} 
function refresh2(){
      document.getElementById("mcdisplay2").innerHTML = "";
      document.getElementById("morse").value = "";
} 

 var morsecode = {
    " ": "/",
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    ',':'--..--', '.':'.-.-.-',
                    '?':'..--..', '-':'-....-',
                    '(':'-.--.', ')':'-.--.-'
};

//Encoder

document.getElementById("alpha").addEventListener("focusin", function() {
    document.getElementById('mcdisplay1').innerHTML = '';
});


function encrypted() {
    document.getElementById('mcdisplay1').innerHTML = '';

    var InputStringValue = document.getElementById("alpha").value.toUpperCase();

    InputStringValue.split("");

    for (var IndexVal = 0; IndexVal < InputStringValue.length; IndexVal++) {

      var solen = document.getElementById("mcdisplay1").innerHTML += morsecode[InputStringValue[IndexVal]] + " ";

      if(morsecode[InputStringValue[IndexVal]] === undefined){
               document.getElementById("mcdisplay2").innerHTML = "#";
                 //alert("Some Mistakes In Your Morse Code...");
            } 

    }

}

//Decoder
function decrypted() {
        document.getElementById('mcdisplay2').innerHTML = '';
    var StartCountIndex = 0,
        InputMorseCode = document.getElementById("morse").value.toString() + " ";
    // try {
    for (var IndexVal = 0; IndexVal <= InputMorseCode.length; IndexVal++) {
        if (InputMorseCode[IndexVal] === " ") {

            var index = IndexVal;
            var MorseCode = InputMorseCode.slice(StartCountIndex, index);
            StartCountIndex = ++index;
            var temp = FindKey(morsecode, MorseCode); 
            document.getElementById("mcdisplay2").innerHTML += temp;
            var sol = document.getElementById("mcdisplay2").innerHTML
             
        }
       if(sol===undefined){
               document.getElementById("mcdisplay2").innerHTML = "";
                 //alert("Some Mistakes In Your Morse Code...");
            } 
    }
    
}
function FindKey(morsecode, Value) {
    for (var Keys in morsecode) {
        if (morsecode.hasOwnProperty(Keys)) {
            if (morsecode[Keys] === Value) {
                return Keys.toLowerCase();
            }
                        
        }
        
    }
    if(morsecode.hasOwnProperty(Keys)){
      if(morsecode[Keys]!=Value){
         return "#";
      }
    }

}
