import React, { Component } from 'react'

import '@styles/app'

import Header from '@views/header'
import Footer from '@views/footer'

export default class App extends Component {
  render () {
    return (
      <div id="app">
        <Header />
        <div className="wrapper">
          {
            this.props.children
          }
        </div>
        <Footer />
      </div>
    )
  }
}
