import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'antd-mobile'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {updateCartReq} from '@/redux/actions'
import Image from '@/components/base/Image'
import Price from '@/components/base/Price'
import Title from '@/components/base/Title'
import InputNumber from '@/components/base/InputNumber'
import {getCartById} from '@/redux/actions'

@connect(null,{
  updateCartReq,
})
class FullCard extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    data: PropTypes.shape({
      cover: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      commentCount: PropTypes.number,
    }).isRequired,
    updateCartReq: PropTypes.func.isRequired
  }
  
  getCartCount() {
    const {data} = this.props
    return getCartById(data.id).count
  }

  handleChange = (count) => {
    const {data,updateCartReq} = this.props
    updateCartReq({
      id: data.id,
      count
    })
  }

  render() {
    const { data, className } = this.props
    const count = this.getCartCount()
    return (
      <Flex row="true" className={className}>
        <div>
          <Image src={data.cover} />
        </div>
        <div>
          <Title>{data.description}</Title>
          {/* TODO may display the tags */}
          <Flex justify="between">
            <Price>{data.price}</Price>
            {/* TODO max limit could come from config */}
            <InputNumber
              max={20}
              min={1}
              value={count}
              onChange={this.handleChange}
            />
          </Flex>
          <span>{data.commentCount} 评论</span>
        </div>
      </Flex>
    )
  }
}

const styledFullCard = styled(FullCard)`
  height: 90px;
  margin: 5px 0 2px 0;
  align-items: flex-end;
  & > :first-child {
    width: 25%;
  }
  & > :last-child {
    padding: 10px;
    height: 100%;
    width: 75%;
    box-sizing: border-box;
    padding: 0 10px 10px 10px;
    border-bottom: solid 1px #d2d2d2;
  }
  & p {
    margin: 0;
  }
  & span {
    font-size: 0.7em;
  }
`

export default styledFullCard