import * as types from './type'

const numState = {
  numa: 1,
  numb: 100
}

export default (state = numState, action) => {
  switch (action.type) {
    case types.INCREMENT_NUM_A:
      state.numa++
      console.log(state)
      return state
    case types.DECREMENT_NUM_A:
      state.numa--
      return state
    case types.INCREMENT_NUM_B:
      state.numb++
      return state
    case types.DECREMENT_NUM_B:
      state.numb--
      return state
    default:
      return state
  }
}
