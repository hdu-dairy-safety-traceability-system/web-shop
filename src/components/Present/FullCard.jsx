import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'antd-mobile'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Image from '@/components/base/Image'
import Price from '@/components/base/Price'
import Title from '@/components/base/Title'

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

  renderCard() {
    const {data,className} = this.props
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
          </Flex>
          <span>{data.commentCount} 评论</span>
        </div>
      </Flex>
    )
  }

  render() {
    const {data} = this.props
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