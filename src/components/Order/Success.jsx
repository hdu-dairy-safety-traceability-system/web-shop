import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'antd-mobile'
import ReactSVG from 'react-svg'
import { Link } from 'react-router-dom'

import Price from '@/components/base/Price'
import billIcon from '@/assets/icons/bill.svg'

class OrderSuccess extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    prop: PropTypes
  }

  static defaultProps = {}

  render() {
    const {className, bill} = this.props
    return (
      <div  className={className}>
        <Flex justify="center">
          <ReactSVG svgStyle={{height: 70, width: 70}} src={billIcon}/>
          <div>
            <p>支付方式：<span>{bill.method}</span></p>
            <p>支付金额：<Price>{bill.sumMoney}</Price></p>
            <p>优惠金额：<Price>{bill.discounts}</Price></p>
          </div>
        </Flex>
        <h3>
          <Link to="/order">查看订单</Link>
        </h3>
        <p>
          注意：礼品平台及销售商不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作
        </p>
      </div>
    )
  }
}

const StyledOrderSuccess = styled(OrderSuccess)`
  // style code here
  & > div {
    padding: 10% 0 5%;
    & > div {
      margin: 5px;
      & > p {
        margin: 5px;
        font-size: 1em;
        & > span {
          color: #f8513b;
          font-weight: 700;
        }
      }
    }
  }
  h3 {
    text-align: center;
  }
  & > p {
    color: #999999;
    margin: 3em;
  }
`

export default StyledOrderSuccess
