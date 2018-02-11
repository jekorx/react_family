import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Numa from '@components/numa'
import Numb from '@components/numb'
import Buttons from '@components/buttons'

export default class Num extends Component {
  render() {
    const { numa, numb, onClick } = this.props
    return (
      <div>
        <Numa num={numa} />
        <Numb num={numb} />
        <hr />
        NumberA + NumberB = {numa + numb}
        <hr />
        <Buttons onClick={onClick}/>
      </div>
    )
  }
}

// 类型检测
Num.propTypes = {
  numa: PropTypes.number.isRequired,
  numb: PropTypes.number.isRequired,
  onClick: PropTypes.object.isRequired
}
