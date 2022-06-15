const boardHTML = document.getElementById("board");
const sets = ["plains", "island", "swamp", "mountain", "forest"];
const cardsPerSet = 2;

//Populate board
for (let i = 0; i < sets.length; i++) {
    for (let j = 0; j < cardsPerSet; j++) {
        const newCard = document.createElement("input");
        newCard.type = "button";
        newCard.classList.add("card");
        newCard.classList.add(sets[i])
        newCard.value = "";
        newCard.addEventListener("click", onCardClick);
        boardHTML.appendChild(newCard);
    }
}

function onCardClick(){

}
