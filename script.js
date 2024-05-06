const boxes = document.querySelectorAll(".boxes");
const winPetterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];
const winerName = document.querySelector("#winnerName");
const winner = document.querySelector(".winner");
const mainDiv = document.querySelector(".main");
let newTurn = document.querySelector("#newTurn");
const plyersTurn = document.querySelector(".plyersTurn");
const newGame = document.querySelector(".start-game");
let turn = true;
// access all boxes of game.
boxes.forEach((e) => {
    e.addEventListener("click", () => {
        if (turn) {
            newTurn.innerText = "O";
            e.innerHTML = "X";
            e.style.color = "#fff";
            turn = false;
        } else {
            newTurn.innerText = "X";
            e.innerHTML = "O";
            e.style.color = "yellow";
            turn = true;
        }
        e.disabled = true;
        checkWinner();
    });
});
//checkwinner function
const checkWinner = () => {
    for (let pettern of winPetterns) {
        let val1 = boxes[pettern[0]].innerText;
        let val2 = boxes[pettern[1]].innerText;
        let val3 = boxes[pettern[2]].innerText;
        if ((val1 != "" && val2 != "", val3 != "")) {
            if (val1 === val2 && val2 === val3) {
                winerName.innerText = val1;
                winner.style.display = "block";
                plyersTurn.style.display = "none";
                boxes.forEach((e) => {
                    e.disabled = true;
                });
            }
        }
    }
};
//reset game function
const resetGame = () => {
    boxes.forEach((e) => {
        e.disabled = false;
        e.innerText = "";
    });
    plyersTurn.style.display = "block";
    winner.style.display = "none";
};
// call reset game when click new game button
newGame.addEventListener("click", resetGame);
