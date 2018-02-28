import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Bundle from '@route/bundle'
import App from '@views/app'
import Main from '@views/main/main'

// 懒加载相关组件（分离打包）
const About = (props) => (
  <Bundle load={() => import('@views/about/about')}>
    {(About) => <About {...props} />}
  </Bundle>
)
// 配置相关主路由
export default class RootRouter extends Component {
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
