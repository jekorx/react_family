import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '@store/number/action'

class Buttons extends Component {
  incrementNumA (e) {
    this.props.dispatch(actions.INCREMENT_NUM_A())
  }
  render() {
    return (
      <div>
        <button onClick={e => this.incrementNumA(e)}>A++</button>
        <button>A--</button>
        <button>B++</button>
        <button>B--</button>
      </div>
    )
  }
}

export default connect(dispatch => dispatch)(Buttons)
