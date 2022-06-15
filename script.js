class Card {
    constructor(cardType) {
        this.cardType = cardType;
    }
}

const boardHTML = document.getElementById("board");
const cardTypes = ["plains", "island", "swamp", "mountain", "forest"];
const cardsPerType = 2;
let cards = [];


cards = generateCards();
shuffle(cards);
setupBoard();


function onCardClick() {

}

function generateCards() {
    const cardArray = [];
    for (let i = 0; i < cardTypes.length; i++) {
        for (let j = 0; j < cardsPerType; j++) {
            const newCard = new Card(cardTypes[i]);
            cardArray.push(newCard);
        }
    }
    return cardArray;
}

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function setupBoard(){
    for (const card of cards) {
        const newCardHTML = document.createElement("input");
        newCardHTML.type = "button";
        newCardHTML.classList.add("card");
        newCardHTML.classList.add(card.cardType);
        newCardHTML.addEventListener("click", onCardClick);
        boardHTML.appendChild(newCardHTML);
    }
}
