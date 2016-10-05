
export const registerBet = (pick) => {
  return {
    type: 'BET_MADE',
    pick,
    result: Math.random() < 0.5 ? 'LEFT' : 'RIGHT'
  }
}

