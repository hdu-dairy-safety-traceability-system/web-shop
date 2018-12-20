import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Flex, Button} from 'antd-mobile'
import styled from 'styled-components'

import shopIcon from '@/assets/icons/shop.svg'
import Image from '@/components/base/Image'
import Price from '@/components/base/Price'
import Title from '@/components/base/Title'


class OrderCard extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    data: PropTypes.shape({
      cover: PropTypes.string,
      price:PropTypes.number,
      description: PropTypes.string,
    }).isRequired,
  }

  render() {
    const {data, className} = this.props
    return (
      <Flex row="true" className={className}>
        <div>
          <Image  src={data.cover}/>
        </div>
        <div>
          <Title>{data.description}</Title>
          <Flex style={{marginTop: 15}} justify="between">
            <Price>{data.price}</Price>
            <Button size="small">评论</Button>
          </Flex>
        </div>
      </Flex>
    )
  }
}
const StyledOrderCard = styled(OrderCard)`
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
  & h3 {
    mirgin: 0 0 15px 0 !important;
  }
  & span {
    font-size: 0.7em;
  }
`
export default StyledOrderCard