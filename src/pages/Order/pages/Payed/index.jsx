import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import OrderSuccess from '@/components/Order/Success'
import TopBar from '@/components/TopBar'

class OrderPayed extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
  }



  render() {
    const {className} = this.props
    return (
      <div className={className}>
        <TopBar>支付成功</TopBar>
        <OrderSuccess/>
      </div>
    )
  }
}

const StyledPayed = styled(OrderPayed)`
  // style code here
`

export default StyledPayed
