import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Carousel } from 'react-responsive-carousel'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Carousel from 'nuka-carousel'

export default class Slider extends Component {
  // 'https://dummyimage.com/1000x400/000/fff&text=11111111111111111111',
  static propTypes = {
    imgUrls: PropTypes.array,
  }
  
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let {imgUrls} = this.props
    if(imgUrls === undefined || imgUrls.length === 0) {
      imgUrls = ['http://dummyimage.com/1800x300']
    }
    console.log(imgUrls)
    return (
      <Carousel
        autoPlay
        cellAlign='center'
      >
        {
          imgUrls.map((url,idx) =><img key={idx} src={url}/>)
        }
      </Carousel>
    )
  }
}

