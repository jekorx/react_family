import React, { Component } from 'react'

export default class Buttons extends Component {
  render() {
    const {
      incrementNumA,
      decrementNumA,
      incrementNumB,
      decrementNumB
    } = this.props.onClick;
    return (
      <div>
        <button onClick={e => {
          e.preventDefault()
          incrementNumA()
        }}>A++</button>
        <button onClick={e => {
          e.preventDefault()
          decrementNumA()
        }}>A--</button>
        <button onClick={e => {
          e.preventDefault()
          incrementNumB()
        }}>B++</button>
        <button onClick={e => {
          e.preventDefault()
          decrementNumB()
        }}>B--</button>
      </div>
    )
  }
}
