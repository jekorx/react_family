import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <div id="header">
        header
        <img src={require('@images/1.jpg')} />
        <img src={require('@images/2.jpg')} />
        <img src={require('@images/3.jpg')} />
      </div>
    )
  }
}
