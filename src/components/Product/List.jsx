import React, { Component } from 'react'

import Card from './Card'
import productReq from '@/network/home/product'

export default class ProductList extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      loading: true,
    }
  }
  componentDidMount() {
    productReq.then(resp => {
      const products = resp.data.products
      this.setState({
        products,
        loading: false
      })
    })
  }
  render() {
    const {products,loading} = this.state
    return (
      <div style={flex}>
        {products.map( (product,idx) => (<Card key={idx} data={product} loading={loading} />) ) }
      </div>
    )
  }
}

const flex = {
  // display: 'flex',
  // flexWrap: 'wrap',
  // justifyContent: 'space-around',
}