import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Flex,WhiteSpace} from 'antd-mobile'

import Image from '@/components/base/Image'
import Price from '@/components/base/Price'
const {Item} = Flex

const mockData = {
  cover: 'http://dummyimage.com/400x400',
  description: '白解存亲算专专关民被省造山采。',
  id: '500000198011092903',
  price: 623,
  title: '划装成南型',
}
export default class FullCard extends Component {
  static propTypes = {
  }

  render() {
    const {data} = this.props
    return (
      <Flex row="true" style={{ height: '90px', borderBottom: 'solid 1px #d2d2d2' }}>
        <div style={{width: '25%'}}>
          <Image  src={data.cover}/>
        </div>
        <div style={{padding: '10px',height: '100%', boxSizing: 'border-box'}}>
          <h4 style={{margin: 0}}>{data.description}</h4>
          <WhiteSpace />
          <Price  value={data.price}/>
          <WhiteSpace />
          <span>{parseInt(Math.random() * 10000)} 评论</span>
        </div>
      </Flex>
    )
  }
}
