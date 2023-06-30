import listScore from './domVariable.js';
import { baseUrl, gameId } from './getApi.js';

const addNewScore = async () => {
  try {
    const response = await fetch(`${baseUrl}games/${gameId}/scores/`);
    const data = await response.json();

    listScore.innerHTML = '';
    let count = 1;
    data.result.forEach((value) => {
      const listToDisplay = document.createElement('li');
      listToDisplay.className = 'listScore';
      listToDisplay.id = count;
      count += 1;
      listToDisplay.innerHTML = `
         <span class="name-list">${value.user}: </span>
         <span class="name-number">${value.score}</span>
       
         `;
      listScore.appendChild(listToDisplay);
    });
    return 'Recieved all scores';
  } catch (error) {
    return `Error fetching scores: ${error}`;
  }
};

export default addNewScore;