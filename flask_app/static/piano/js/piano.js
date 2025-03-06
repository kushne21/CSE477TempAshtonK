const sound = {65:"http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
    87:"http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
    83:"http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
    69:"http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
    68:"http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
    70:"http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
    84:"http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
    71:"http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
    89:"http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
    72:"http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
    85:"http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
    74:"http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
    75:"http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
    79:"http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
    76:"http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
    80:"http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
    186:"http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav",
    oldone: "https://orangefreesounds.com/wp-content/uploads/2020/09/Creepy-piano-sound-effect.mp3?_=1"};



//receives letter/event and plays sound, taps the key down, and tracks the sequence of letters being played in order
document.addEventListener("keydown", (event) => {
    const key = event.keyCode;
    if (sound[key]) {
        playSound(sound[key]);
        highlightKey(key);
        trackSequence(key);
    }
});

// Play sound using source file
function playSound(src) {
    const audio = new Audio(src);
    audio.play();
}

// Highlight pressed key
function highlightKey(key) {
    const keyElement = document.querySelector(`[data-key="${key}"]`);
    if (keyElement) {
        keyElement.classList.add("pressed");
        setTimeout(() => keyElement.classList.remove("pressed"), 100);
    }
}

//changable sequence and what it is to be compared 
let sequence = "";
const targetSequence = "weseeyou";

//turns keys to lowercase in case, awakens if the sequence of characters matches
function trackSequence(key) {
    //appends each time, gets checked
    sequence += String.fromCharCode(key).toLowerCase();
    if (!targetSequence.startsWith(sequence)) {
        sequence = ""; // Reset if incorrect
    }
    if (sequence === targetSequence) {
        awakenGreatOldOne();
    }
}

// displays the image
function awakenGreatOldOne() {
    document.getElementById("piano").style.opacity = "0";
    //setTimeout(() => {
        document.getElementById("piano").style.display = "none";
        const greatOldOne = document.getElementById("great-old-one");
        greatOldOne.style.display = "flex";
        greatOldOne.querySelector("img").style.opacity = "1";
        playSound(sound["oldone"]);
        //setTimeout(() => greatOldOne.querySelector("img").style.opacity = "1", 500);
    //}, 2000);
}