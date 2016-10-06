let id = 0;

export const registerBet = (pick) => {
  return {
    type: 'BET_MADE',
    id: id++,
    pick,
    result: Math.random() < 0.5 ? 'LEFT' : 'RIGHT'
  }
}

