import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { NavBar, Icon } from 'antd-mobile'
import styled from 'styled-components'
import {all} from '@/network/cart'
import CartList from '@/components/Cart/List'

import { getCart } from '@/redux/actions'

@connect(store => ({list: store.cart.cart}), {getCart})
class Cart extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    getCart: PropTypes.func.isRequired,
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
        <CartList dataSet={list}/>
      </div>
    )
  }
}

const StyledCart = styled(Cart)`
  // style code here
`

export default StyledCart
