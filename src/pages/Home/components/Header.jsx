import React, { Component } from 'react'

import Slider from '@/components/Slider'
import sliderReq from '@/network/home/slider'
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: []
    }
  }
  componentDidMount() {
    sliderReq.then(resp => {
      const data = resp.data
      const urls = data.map( carouse => carouse.url)
      this.setState({urls})
    })
  }
  render() {
    const { urls } = this.state
    return (<Slider imgUrls={urls}/>)
  }
}
