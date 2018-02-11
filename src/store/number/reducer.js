import * as types from './type'

const numState = {
  numa: 1,
  numb: 100
}

/**
 * 不能直接修改state
 */
export default (state = numState, action) => {
  switch (action.type) {
    case types.INCREMENT_NUM_A:
      return Object.assign({}, state, {
        numa: state.numa + 1
      })
    case types.DECREMENT_NUM_A:
      return Object.assign({}, state, {
        numa: state.numa - 1
      })
    case types.INCREMENT_NUM_B:
      return Object.assign({}, state, {
        numb: state.numb + 1
      })
    case types.DECREMENT_NUM_B:
      return Object.assign({}, state, {
        numb: state.numb - 1
      })
    default:
      return state
  }
}
