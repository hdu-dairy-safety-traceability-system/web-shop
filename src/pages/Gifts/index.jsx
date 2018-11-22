import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GiftsList from '@/components/Gifts/List'
export default class Gifts extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <GiftsList full/>
      </div>
    )
  }
}
