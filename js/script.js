let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const yourmove_p = document.getElementById("action_message")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function win(playerChoice, computerChoice) {
    const smallUserText = "User".fontsize(3).sub();
    const smallComputerText = "Computer".fontsize(3).sub();
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${playerChoice} ${smallUserText} beats ${computerChoice} ${smallComputerText}. You win!`;
    playerChoice_div.classList.add('wincolor');
    setTimeout(() => playerChoice_div.classList.remove('wincolor'), 300);
    if(playerScore === 5){
        // show the result & show a button to play again
        result_p.innerHTML='Game over, you win! <button onclick="endGame()">Click here to play again</button>';
        // disable buttons so that user cannot continue to play
  rock_div.classList.add('removebtn');
  paper_div.classList.add('removebtn');
  scissors_div.classList.add('removebtn');
  yourmove_p.classList.add('removebtn');
    }
}

function lose(playerChoice, computerChoice) {
    const smallUserText = "User".fontsize(3).sub();
    const smallComputerText = "Computer".fontsize(3).sub();
    const playerChoice_div = document.getElementById(playerChoice);
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${playerChoice} ${smallUserText} loses to ${computerChoice} ${smallComputerText}. You lose!`;
    playerChoice_div.classList.add('losecolor');
    setTimeout(() => playerChoice_div.classList.remove('losecolor'), 300);
    if(computerScore === 5){
        // show the result & show a button to play again
        result_p.innerHTML='Game over, you lose! <button onclick="endGame()">Click here to play again</button>';

        rock_div.classList.add('removebtn');
  paper_div.classList.add('removebtn');
  scissors_div.classList.add('removebtn');
  yourmove_p.classList.add('removebtn');
    }
}

function draw(playerChoice, computerChoice) {
    const smallUserText = "User".fontsize(3).sub();
    const smallComputerText = "Computer".fontsize(3).sub();
    const playerChoice_div = document.getElementById(playerChoice);
    result_p.innerHTML = `${playerChoice} ${smallUserText} equals ${computerChoice} ${smallComputerText}. It's a draw!`;
    playerChoice_div.classList.add('greycolor');
    setTimeout(() => playerChoice_div.classList.remove('greycolor'), 300);
}

function game(playerChoice) {
const computerChoice = getComputerChoice();
switch (playerChoice + computerChoice){
case "rockscissors":
    case "paperrock":
        case "scissorspaper":
            win(playerChoice, computerChoice);
            break;
            case "rockpaper":
                case "paperscissors":
                    case "scissorsrock":
                        lose(playerChoice, computerChoice);
                        break;
                        case "rockrock":
                            case "paperpaper":
                                case "scissorsscissors":
                                    draw(playerChoice, computerChoice);
                                    break;
}
}

function endGame() {
    // reset both score to 0
    playerScore = 0;
    computerScore = 0;
  
    // display the new score to user
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
  
    // show blank result
    result_p.innerHTML = ``;
  
    // reenable all the RPS buttons so that user can continue to play
    rock_div.classList.remove('removebtn');
    paper_div.classList.remove('removebtn');
    scissors_div.classList.remove('removebtn');
    yourmove_p.classList.remove('removebtn');
}

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}

main();