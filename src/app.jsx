import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '@views/header'
import Footer from '@views/footer'
import Main from '@views/main/main'
import About from '@views/about/about'

import '@styles/app'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ' react!'
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        name: ' react! 666'
      })
    }, 5000);
  }
  render () {
    return (
      <div id="app">
        <Header />
        <div className="wrapper">
          <Switch>
            <Route path={this.props.match.url} component={Main} />
            <Route path={`${this.props.match.url}main`} component={Main} />
            <Route path={`${this.props.match.url}about`} component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}
