import React, { Component } from 'react'
import withStyles from 'react-jss'

import HalfCard from './HalfCard'
import productReq from '@/network/home/product'

const styles = {
  list: {
    textAlign: 'left',
    '& > div:nth-child(odd)': {
      paddingRight: '10px'
    },
    '& > div:nth-child(even)': {
      paddingLeft: '10px'
    }
  }
}
@withStyles(styles)
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
    const {classes} = this.props
    const {products,loading} = this.state
    return (
      <div className={classes.list}>
        {products.map((product, idx) => (<HalfCard key={idx} data={product} loading={loading} />) ) }
      </div>
    )
  }
}
