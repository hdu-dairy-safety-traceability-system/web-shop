import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PresentList from '@/components/Present/List'
export default class Presents extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <PresentList full/>
      </div>
    )
  }
}
