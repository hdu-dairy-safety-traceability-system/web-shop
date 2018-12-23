import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Price from '@/components/base/Price'
import Slider from '@/components/Slider'
import CommentList from '@/components/Comment/List'
import PresentDetail from '@/components/Present/Detail'

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
    }),
    images: PropTypes.object.isRequired,
  }
  
  static defaultProps = {
    info: {}
  }

  render() {
    const {info,images} = this.props
    return (
      <div>
        <Slider imgUrls={images.carouse} />
        <TextWrapper className="text">
          <h3>{info.description}</h3>
          <Price>{info.price}</Price>
        </TextWrapper>
        <GraySpace />
        <PresentDetail details={images.detail}/>
        <GraySpace />
        <CommentList dataSet={info.comments}/>
      </div>
    )
  }
}
