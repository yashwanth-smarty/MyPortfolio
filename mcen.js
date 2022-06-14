 //Morse Code Set
function refresh(){
  location.reload();
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


document.getElementById("encode").addEventListener("click", function() {
    var InputStringValue = document.getElementById("alpha").value.toUpperCase();

    InputStringValue.split("");

    for (var IndexVal = 0; IndexVal < InputStringValue.length; IndexVal++) {

        document.getElementById("mcdisplay1").innerHTML += morsecode[InputStringValue[IndexVal]] + " ";

    }

});

//Decoder
document.getElementById("decode").addEventListener("click", function() {
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
            if(temp===undefined){
                document.getElementById("mcdisplay2").innerHTML ="### ";
                 // alert("Some Mistakes In Your Morse Code...");
            }
        }
    }
    
});
function FindKey(morsecode, Value) {
    for (var Keys in morsecode) {
        if (morsecode.hasOwnProperty(Keys)) {
            if (morsecode[Keys] === Value) {
                return Keys.toLowerCase();
            }
        }
    }
}