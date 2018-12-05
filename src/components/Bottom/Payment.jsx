import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Button} from 'antd-mobile'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Radio from '@/components/base/Radio'
import Price from '@/components/base/Price'
import {totalPrice, makeOrder} from '@/redux/actions'

@connect(null, {makeOrder})
class Payment extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    makeOrder: PropTypes.func.isRequired,
  }

  static defaultProps = {}

  handleClick() {
    // unselect all
  }
  
  purchase = () => {
    this.props.makeOrder()
  }
  render() {
    const {className} = this.props
    const sum = totalPrice()
    return (
      <div className={className}>
        <div>
          <Radio selected onClick={this.handleClick} />
          <Price>{sum}</Price>
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
