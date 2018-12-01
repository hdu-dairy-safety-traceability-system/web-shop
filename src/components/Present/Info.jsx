import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Price from '@/components/base/Price'
import Slider from '@/components/Slider'

const TextWrapper = styled.div`
  padding: 0 20px;
`

export default class PresentInfo extends Component {

  static propTypes = {
    info: PropTypes.shape({
      imgUrls: PropTypes.array,
      title: PropTypes.string,
      price: PropTypes.number,
    })
  }

  render() {
    const {info} = this.props
    return (
      <div>
        <Slider imgUrls={info.imgUrls} />
        <TextWrapper className="text">
          <h3>{info.title}</h3>
          <Price>{info.price}</Price>
        </TextWrapper>
      </div>
    )
  }
}
