import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PresentView from '@/containers/PresentView'
export default class Presents extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <PresentView full/>
      </div>
    )
  }
}
