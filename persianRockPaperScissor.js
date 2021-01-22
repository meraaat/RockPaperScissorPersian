//store score
let myScore = 0;
let computerScore = 0;
let counter = 0;

try {
  while (true) {
    //get input
    let input = prompt("input سنگ کاغذ قیچی");
    if (!input) term = false;
    //pattern
    let pattern = ["قیچی", "سنگ", "کاغذ"];

    //data set
    let dataSet = [
      [0, -1, 1],
      [1, 0, -1],
      [-1, 1, 0],
    ];

    // give my turn
    let myTurn;
    for (let i = 0; i < pattern.length; i++) {
      if (input === pattern[i]) {
        myTurn = i;
      }
    }

    //give computer turn
    let computerTurn = Math.floor(Math.random() * pattern.length);

    //status message
    let message = "";
    //play
    if (dataSet[myTurn][computerTurn] === 1) {
      myScore++;
      message = "you win this round, ";
      message += `your score : ${myScore} , computer score : ${computerScore}`;
    } else if (dataSet[myTurn][computerTurn] === -1) {
      computerScore++;
      message = "computer wins this round, ";
      message += `your score : ${myScore} , computer score : ${computerScore}`;
    } else {
      message = "you and computer was equal, nothing happened , ";
      message += `your score : ${myScore} , computer score : ${computerScore}`;
    }
    message += " turn " + counter;
    let p = document.createElement("p");
    p.innerText = message;
    document.body.appendChild(p);
    counter++;
  }
} catch (e) {
  if (e) {
    alert("game ended!");
  }
}
