import React, { Component } from 'react'

import Numa from '@components/numa'
import Numb from '@components/numb'
import Buttons from '@components/buttons'

export default class Num extends Component {
  render() {
    return (
      <div>
        <Numa />
        <Numb />
        <Buttons />
      </div>
    )
  }
}
