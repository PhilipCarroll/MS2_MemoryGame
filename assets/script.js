
// Defining HTML elements for use in JS
const card = document.querySelectorAll('.card')
const flipCounter = document.getElementById('flip-counter')

class AudioController {
    constructor() {
        this.cardFlip = new Audio(assets/sounds/cardFlip.ogg);
        this.cardMatch = new Audio(assets/sounds/cardMatch.mp3);
        this.noMatch = new Audio(assets/sounds/noMatch.wav);
    }
    flip() {
        this.cardFlip.play();
    }
    match() {
        this.cardMatch.play();
    }
    noMatch() {
        this.noMatch.play();
    }
}


// Once html has loaded pageLoaded function is called
function pageLoaded() {

    function startGame() {
        let cardArray = Array.from(document.querySelectorAll(".card"));
        let cardMatch = [];

        cardArray.forEach((card) => {
            card.addEventListener("click", () => {
                flipCard(card);
            });
        });

        // Card shuffle Function
        function shuffleCards(card) {
            var cards = document.querySelectorAll(".card")
            cards.forEach((card) => {
                let cardPosition = Math.floor(Math.random() * 16);
                card.style.order = cardPosition;
            });
        };

    };

};

// Ensuring html loads before calling game script to run

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", pageLoaded());
} else {
    pageLoaded();
}


