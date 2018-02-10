import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Numa from '@components/numa'
import Numb from '@components/numb'
import Buttons from '@components/buttons'

class Num extends Component {
  render() {
    return (
      <div>
        <Numa num={this.props.numa} />
        <Numb num={this.props.numb} />
        <hr/>
        <Buttons />
      </div>
    )
  }
}

// 类型检测
Num.propTypes = {
  numa: PropTypes.number.isRequired,
  numb: PropTypes.number.isRequired
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(Num) 中；
export default connect(state => state.number)(Num)
