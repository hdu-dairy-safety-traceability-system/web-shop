import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GiftsFilter from '@/components/Gifts/Filter'
export default class Cart extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <GiftsFilter />
      </div>
    )
  }
}
