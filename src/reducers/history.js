let id = 1;
const initialState = [
]

const history = (state = initialState, action) => {
  switch (action.type) {
    case 'BET_MADE':
      return [ ...state, {
        id: id++,
        pick: action.pick,
        result: action.result
      }
      ]/*.slice(-5)*/;


    default:
      return state
  }
}

export default history
