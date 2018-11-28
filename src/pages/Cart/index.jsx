import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PresentFilter from '@/components/Present/Filter'
import ButtomBar from '@/components/BottomBar'

export default class Cart extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <PresentFilter />
        <ButtomBar />
      </div>
    )
  }
}
