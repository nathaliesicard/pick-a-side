const initialState = {
  balance: 100
}

const balance = (state = initialState, action) => {
  switch (action.type) {
    case 'BET_MADE':
      const diff = action.pick === action.result ? 100 : -100; // this is an if statement
      return {
        balance: state.balance + diff,
      };
    default:
      return state
  }
}

export default balance
