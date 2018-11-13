import React, { Component } from 'react'
import withStyles from 'react-jss'

import Card from './Card'
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
        {products.map((product, idx) => (<Card key={idx} data={product} loading={loading} />) ) }
      </div>
    )
  }
}

const flex = {
  // display: 'flex',
  // flexWrap: 'wrap',
  // justifyContent: 'space-around',
}