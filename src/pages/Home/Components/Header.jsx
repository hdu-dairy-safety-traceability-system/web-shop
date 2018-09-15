import React, { Component } from 'react'

import Slider from '@/Components/Slider'
import sliderReq from '@/Request/home/slider'
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: []
    }
  }
  componentDidMount() {
    sliderReq.then(resp => {
      const {urls} = resp.data.data
      this.setState({urls})
    })
  }
  render() {
    const { urls } = this.state
    return (
      <div>
        <Slider imgUrls={urls}/>
      </div>
    )
  }
}
