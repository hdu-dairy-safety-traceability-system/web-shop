import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import OrderSuccess from '@/components/Order/Success'
import TopBar from '@/components/TopBar'
const mockData = {
  method: '账户扣款',
  sumMoney: 5555,
  discounts: 0
}
class OrderPayed extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    prop: PropTypes
  }

  static defaultProps = {
    bill: {
      method: '账户扣款',
      sumMoney: 0,
      discounts: 0
    }
  }

  render() {
    const {className} = this.props
    return (
      <div className={className}>
        <TopBar>支付成功</TopBar>
        <OrderSuccess bill={mockData}/>
      </div>
    )
  }
}

const StyledPayed = styled(OrderPayed)`
  // style code here
`

export default StyledPayed
