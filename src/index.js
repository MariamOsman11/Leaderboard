import './style.css';
import addNewScore from './modules/score.js';

import {
  refreshButton, nameInputText, scoreInputText, submitScore,
} from './modules/domVariable.js';
import createGame from './modules/createGame.js';
import submitData from './modules/sendData.js';

submitScore.addEventListener('click', () => {
  const Name = nameInputText.value;
  const Score = scoreInputText.value;
  submitData(Name, Score);
  nameInputText.value = '';
  scoreInputText.value = '';
});

refreshButton.addEventListener('click', addNewScore);
createGame();