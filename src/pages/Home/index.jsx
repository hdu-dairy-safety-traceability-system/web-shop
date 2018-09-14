import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Slider from '@/Component/Slider'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider/>
      </div>
    )
  }
}
