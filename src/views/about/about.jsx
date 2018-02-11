import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Bundle from '@route/bundle'

const Counter = (props) => (
  <Bundle load={() => import('@containers/counter')}>
    {(Counter) => <Counter {...props} />}
  </Bundle>
)

const Product = (props) => (
  <Bundle load={() => import('@views/about/product')}>
    {(Product) => <Product {...props} />}
  </Bundle>
)

export default class About extends Component {
  render() {
    return (
      <div>
        <Link to="/about/number">Number</Link>
        <Link to="/about/product">Product</Link>
        <hr/>
        <Route path={`${this.props.match.url}/number`} component={Counter} />
        <Route path={`${this.props.match.url}/product`} component={Product} />
      </div>
    )
  }
}
