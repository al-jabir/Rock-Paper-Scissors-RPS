const getComputerChoice = () => {
  const rpsChoice = ['Rock', 'Paper', 'Scissors'];
  const randomChoice = rpsChoice[Math.floor(Math.random() * 3)];
  return randomChoice;
};

const getResult = (playerChoice, computerChoice) => {
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1;
  } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
    score = 1;
  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
    score = 1;
  } else {
    score = -1;
  }
  return score;
};

const showResult = (score, playerChoice, computerChoice) => {
  const result = document.getElementById('result');
  const hands = document.getElementById('hands');
  const PlayerScore = document.getElementById('player-score');
  // console.log(result, hands, PlayerScore);
  switch (score) {
    case -1:
      result.innerText = `You lose`;
      break;
    case 0:
      result.innerText = `It's a Draw`;
      break;
    case 1:
      result.innerText = `You win!`;
      break;
  }
  hands.innerText = `${playerChoice} vs ${computerChoice}`;
  PlayerScore.innerText = `${Number(PlayerScore.innerText) + score}`;
};

const onclickRPS = playerChoice => {
  // console.log({ playerChoice });
  const computerChoice = getComputerChoice();
  // console.log({ computerChoice });
  const score = getResult(playerChoice, computerChoice);
  // console.log({ score });
  showResult(score, playerChoice, computerChoice);
};

const playGame = () => {
  const rpsButtons = document.querySelectorAll('.rpsButton');
  // console.log(rpsButtons);
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onclickRPS(rpsButton.value);
  });
  const endGameButton = document.getElementById('endGameButton');
  endGameButton.onclick = () => endGame();
};

const endGame = () => {
  console.log(`clear data`);
  const result = document.getElementById('result');
  const hands = document.getElementById('hands');
  const PlayerScore = document.getElementById('player-score');

  result.innerText = '';
  hands.innerText = '';
  PlayerScore.innerText = '';
};
playGame();
