import { baseUrl, gameId } from './getApi.js';
// submit button
const submitData = async (Name, Score) => {
  try {
    const response = await fetch(`${baseUrl}games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: Name,
        score: Number(Score),
      }),
    });

    const data = await response.json();

    return data.result;
  } catch (error) {
    return `Error submitting score: ${error}`;
  }
};

export default submitData;