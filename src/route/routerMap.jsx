import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import App from '@views/app'

const Main = (props) => (
  <Bundle load={() => import('@views/main/main')}>
    {(Main) => <Main {...props} />}
  </Bundle>
)
const About = (props) => (
  <Bundle load={() => import('@views/about/about')}>
    {(About) => <About {...props} />}
  </Bundle>
)

export default class RouterMap extends Component {
  render () {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/main" component={Main}/>
            <Route path="/about" component={About}/>
          </Switch>
        </App>
      </Router>
    )
  }
}

class Bundle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mod: null
    }
  }
  componentWillMount() {
    this.load(this.props)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }
  load(props) {
    this.setState({
      mod: null
    })
    //注意这里，使用Promise对象; mod.default导出默认
    props.load().then(mod => {
      this.setState({
        mod: mod.default ? mod.default : mod
      })
    })
  }
  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}
