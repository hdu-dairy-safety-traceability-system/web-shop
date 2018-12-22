import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Button} from 'antd-mobile'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Radio from '@/components/base/Radio'
import Price from '@/components/base/Price'
import { makeOrder } from '@/redux/actions'

@connect((store) => ({ order: store.cart.order, totalPrice: store.cart.totalPrice}), {makeOrder})
class Payment extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    makeOrder: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired,
  }

  static defaultProps = {}

  handleClick() {
    // unselect all
  }
  
  purchase = () => {
    this.props.makeOrder()
  }
  render() {
    const { className, order, totalPrice} = this.props
    if(order.isSucc) {
      return (<Redirect to="/order/payed"/>)
    }
    return (
      <div className={className}>
        <div>
          <Radio selected onClick={this.handleClick} />
          <Price>{totalPrice}</Price>
        </div>
        <Button onClick={this.purchase} type="warning">下单</Button>
      </div>
    )
  }
}

const StyledPayment = styled(Payment)`
  // style code here
  display: flex;
  align-items: center;
  justify-content: space-between;
  div > span {
    margin: 0 1em;
  }
  position: fixed;
  height: 50px;
  background-color: #fff;
  & > a {
    width: 30%;
  }
`

export default StyledPayment
