import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd-mobile'
export default class Slider extends Component {
  static propTypes = {
    imgUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  }
  
  state = {
    idle: ''
  }
  handleLoad = () => {
    // force to re-render
    this.setState({idle: 'idle'})
  }
  render() {
    let {imgUrls} = this.props
    if(imgUrls === undefined || imgUrls.length === 0) {
      imgUrls = ['http://dummyimage.com/1800x300']
    }
    return (
      <Carousel
        autoPlay
        infinite
      >
        {imgUrls.map((url,idx) =><img onLoad={this.handleLoad} key={idx} src={url}/>)}
      </Carousel>
    )
  }
}

