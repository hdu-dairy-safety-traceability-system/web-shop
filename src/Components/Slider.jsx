import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default class Slider extends Component {
  static defaultProps = {
    imgUrls: [
      'https://dummyimage.com/1000x400/000/fff&text=11111111111111111111',
    ]
  }
  static propTypes = {
    imgUrls: PropTypes.array,
  }
  
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {imgUrls} = this.props
    return (
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        emulateTouch
      >
        {
          imgUrls.map((url,idx) =>{
            return (
              <div key={idx}>
                <img src={url}/>
              </div>
            )

          })
        }
      </Carousel>
    )
  }
}

