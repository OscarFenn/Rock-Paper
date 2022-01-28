function computerPlay() {
    let rockpaper = ["rock", "paper", "scissors"];

    return rockpaper[Math.floor(Math.random() * rockpaper.length)]
//console.log(random, rockpaper[random]);
  }

  function playRound(playerSelection, computerSelection) {
    
    

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        return ('You win!')

        
        }
        if (playerScore == 5) {
            return ('You won the game!')
            
        }
        else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'paper' && computerSelection == 'scissors')) {
        
        computerScore += 1
        return ('You lose!')
        }
        else if (computerScore == 5) {
            return ('You lost the game!')
            
        }
        else if (playerSelection === computerSelection) {
            return('tie')
          }    
        
  }


let playerSelection = "rock";
let computerSelection = computerPlay();
let playerScore = 0
let computerScore = 0
let roundWinner = ''


function game(){
    for (let i = 0; i < 5; i++)
return playRound(playerSelection, computerSelection)

}

console.log(game)