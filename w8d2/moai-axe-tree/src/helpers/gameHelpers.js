export const pickOppositeEmoji = (playerEmoji) => {
  const listOfEmojis = ["🌳", "🪓", "🗿"];

  const playerIndex = listOfEmojis.indexOf(playerEmoji);

  if (playerIndex === -1) {
    return "💩";
  }

  const computerIndex = (playerIndex + 1) % listOfEmojis.length;

  return listOfEmojis[computerIndex];
};

export const pickRandomEmoji = (seed) => {
  const listOfEmojis = ["🌳", "🪓", "🗿"];

  const randomIndex = Math.floor(seed * 3);

  if (Number.isNaN(randomIndex) || seed >= 1 || seed < 0) {
    return "💩";
  }
  return listOfEmojis[randomIndex];
};

export const determineWinner = (playerChoice, computerChoice) => {
  // tie, player, computer
  const winningObj = {
    "🌳": "🪓",
    "🪓": "🗿",
    "🗿": "🌳",
  };

  if (playerChoice === computerChoice) {
    return "tie";
  }

  if (winningObj[playerChoice] === computerChoice) {
    return "computer";
  }

  return "player";
};
