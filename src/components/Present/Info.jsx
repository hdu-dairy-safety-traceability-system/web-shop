import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Price from '@/components/base/Price'
import Slider from '@/components/Slider'
import CommentList from '@/components/Comment/List'

const TextWrapper = styled.div`
  padding: 0 20px;
`
const GraySpace = styled.div`
  background-color: #f5f5f5;
  height: 2em;
`

export default class PresentInfo extends Component {

  static propTypes = {
    info: PropTypes.shape({
      images: PropTypes.array,
      title: PropTypes.string,
      price: PropTypes.number,
    })
  }
  
  static defaultProps = {
    info: {
      images: []
    }
  }

  render() {
    const {info} = this.props
    return (
      <div>
        <Slider imgUrls={info.images} />
        <TextWrapper className="text">
          <h3>{info.title}</h3>
          <Price>{info.price}</Price>
        </TextWrapper>
        <GraySpace />
        <CommentList dataSet={info.comments}/>
      </div>
    )
  }
}
