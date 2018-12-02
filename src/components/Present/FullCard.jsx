import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Flex,WhiteSpace} from 'antd-mobile'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
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
class FullCard extends Component {
  static propTypes = {
    data: PropTypes.shape({
      cover: PropTypes.string,
      price:PropTypes.number,
      description: PropTypes.string,
      // commentCount: PropTypes.number,
    }).isRequired,
  }

  render() {
    const {data,className} = this.props
    return (
      <Link to={`/present/${data.id}`}>
        <Flex row="true" className={className}>
          <div>
            <Image  src={data.cover}/>
          </div>
          <div>
            <h4 style={{margin: 0}}>{data.description}</h4>
            {/* TODO may display the tags */}
            <WhiteSpace />
            <Price>{data.price}</Price>
            <WhiteSpace />
            <span>{parseInt(Math.random() * 10000)} 评论</span>
          </div>
        </Flex>
      </Link>
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