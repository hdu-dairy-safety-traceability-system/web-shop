import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { WhiteSpace,Flex } from 'antd-mobile'
import styled from 'styled-components'
import ReactSVG from 'react-svg'

import shopIcon from '@/assets/icons/shop.svg'
import OrderCard from './Card'

class OrderSingel extends PureComponent {
  static propTypes = {

  }

  render() {
    const { data, className } = this.props
    return (
      <div className={className}> 
        <Flex style={{padding: '5px 10px'}} align="center" justify="between">
          {/* // left */}
          <Flex>
            <ReactSVG svgStyle={{height: '1em', width: '1em'}}src={shopIcon}/>
            礼品商城
          </Flex>
          {/* right */}
          <span>已下单</span>
        </Flex>
        
        {data.orderItems.map((data, idx) => (<OrderCard data={data} key={idx} />))}
        <Flex style={{padding: '1em'}} justify="end">
          共<span>{data.count}</span>件商品&emsp;实付款：<b>￥{data.sum_money}</b>
        </Flex>
        <WhiteSpace style={{backgroundColor: '#eee'}} size="lg"/>
      </div>
    )
  }
}

const StyledSingel = styled(OrderSingel)`
  & div > span {
    color: red;
    margin: 3px;
  }
  & b {
    font-weight: 600;
  }
`

export default StyledSingel
