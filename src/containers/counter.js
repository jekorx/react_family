import { connect } from 'react-redux'

import * as actions from '@store/number/action'

import Num from '@views/about/num'

// 注入state的方法mapStateToProps
const mapStateToProps = state => state.number

// 注入dispatch的方法mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  onClick: {
    incrementNumA: () => dispatch(actions.INCREMENT_NUM_A()),
    decrementNumA: () => dispatch(actions.DECREMENT_NUM_A()),
    incrementNumB: () => dispatch(actions.INCREMENT_NUM_B()),
    decrementNumB: () => dispatch(actions.DECREMENT_NUM_B())
  }
})

// 包装component，将mapStateToProps和mapDispatchToProps注入到connect()(Num)中
export default connect(mapStateToProps, mapDispatchToProps)(Num)
