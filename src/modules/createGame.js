// getting the game id

import { baseUrl } from './getApi.js';

const createGame = async () => {
  try {
    const response = await fetch(`${baseUrl}games/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Awesome Game',
      }),
    });
    const data = await response.json();
    return `Game created with ID: ${data}`;
  } catch (error) {
    return `Error creating game: ${error}`;
  }
};

export default createGame;