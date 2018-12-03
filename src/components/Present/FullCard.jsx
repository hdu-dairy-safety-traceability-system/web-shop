import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Flex,WhiteSpace,Stepper} from 'antd-mobile'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Image from '@/components/base/Image'
import Price from '@/components/base/Price'
import Title from '@/components/base/Title'
import InputNumber from '@/components/base/InputNumber'

const mockData = {
  cover: 'http://dummyimage.com/400x400',
  description: '白解存亲算专专关民被省造山采。',
  id: '500000198011092903',
  price: 623,
  title: '划装成南型',
}
class FullCard extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    data: PropTypes.shape({
      cover: PropTypes.string,
      price:PropTypes.number,
      description: PropTypes.string,
      // commentCount: PropTypes.number,
    }).isRequired,
  }

  state = {
    count: 1
  }
  
  handleChange = (count) => {
    this.setState({count})
  }
  
  renderCard() {
    const {data,className} = this.props
    const {count} = this.state
    return (
      <Flex row="true" className={className}>
        <div>
          <Image  src={data.cover}/>
        </div>
        <div>
          <Title>{`${data.title}-${data.description}`}</Title>
          {/* TODO may display the tags */}
          <Flex justify="between">
            <Price>{data.price}</Price>
            {/* TODO max limit could come from config */}
            {data.count && <InputNumber
              max={20}
              min={1}
              value={count}
              onChange={this.handleChange}
            />}
          </Flex>
          <span>{data.commentCount} 评论</span>
        </div>
      </Flex>
    )
  }
  render() {
    const {data} = this.props
    // data.count = 1
    if(data.count) {
      return this.renderCard()
    }
    return (
      <Link to={`/presents/${data.id}`}>
        {this.renderCard()}
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