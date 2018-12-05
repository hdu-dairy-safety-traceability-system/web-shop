import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { NavBar, Icon } from 'antd-mobile'
import styled from 'styled-components'
import CartList from '@/components/Cart/List'
import ViewWithBar from '@/layouts/ViewWithBar'
import { getCart } from '@/redux/actions'
import Payment from '@/components/Bottom/Payment'
@connect(store => ({list: store.cart.cart}), {getCart})
class Cart extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    getCart: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
  }

  static defaultProps = {}

  componentDidMount() {
    const { getCart } = this.props
    getCart()
  }
 
  render() {
    const {className, list} = this.props
    // const {list} = this.state
    return (
      <div className={className}>
        <NavBar
          icon={<Icon type="left"/>}
          mode="light"
          //https://reacttraining.com/react-router/web/api/history
          onLeftClick={() => window.history.back()}
        >
          购物车
        </NavBar>
        <ViewWithBar 
          component={<CartList dataSet={list} />}
          bar={<Payment />}
        />
        {/* <CartList dataSet={list}/> */}
        
      </div>
    )
  }
}

const StyledCart = styled(Cart)`
  // style code here
`

export default StyledCart
