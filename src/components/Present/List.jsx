import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import HalfCard from './HalfCard'
import FullCard from './FullCard'
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
export default class GiftsList extends Component {
  static propTypes = {
    full: PropTypes.bool.isRequired
  }

  static defaultProps = {
    full: false
  }
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
    const {classes, full} = this.props
    const {products,loading} = this.state
    console.log(products)
    return (
      <div className={full ?  '' : classes.list}>
        {products.map(
          (product, idx) => ( 
            full ? (<FullCard key={idx} data={product} loading={loading} />)
              : (<HalfCard key={ idx } data={ product } loading={ loading } />) 
          )
        )}
      </div>
    )
  }
}
