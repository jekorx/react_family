import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Counter from '@containers/counter'
import Product from '@views/about/product'
import Num from '@views/about/num'

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
