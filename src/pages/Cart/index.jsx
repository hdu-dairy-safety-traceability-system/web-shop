import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GiftsFilter from '@/components/Gifts/Filter'
import ButtomBar from '@/components/BottomBar'

export default class Cart extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <GiftsFilter />
        <ButtomBar />
      </div>
    )
  }
}
