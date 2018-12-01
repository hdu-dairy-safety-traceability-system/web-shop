import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PresentFilter from '@/components/Present/Filter'

export default class Cart extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <PresentFilter />
      </div>
    )
  }
}
