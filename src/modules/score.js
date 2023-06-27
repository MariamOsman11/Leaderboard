const listScore = document.querySelector('.listNameAndScore');

const recentScore = [
  {
    name: 'Binyam',
    number: 100,
  },
  {
    name: 'Tegene',
    number: 80,

  },
  {
    name: 'Osman',
    number: 90,
  },
  {
    name: 'Mariam',
    number: 70,

  },
  {
    name: 'John',
    number: 70,

  },
  {
    name: 'Hannah',
    number: 70,

  }];
const displayContent = () => {
  recentScore.forEach((value) => {
    const listToDisplay = document.createElement('li');
    listToDisplay.className = 'listScore';
    listToDisplay.id = value.id;
    listToDisplay.innerHTML = `
         <span class="name-list">${value.name}: </span>
         <span class="name-number">${value.number}</span>
         
         `;
    listScore.appendChild(listToDisplay);
  });
};

export default displayContent;
