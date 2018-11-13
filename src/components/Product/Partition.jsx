import React, { Component } from 'react'
import PropTypes from 'prop-types'

import List from './List'
export default class Partition extends Component {
  static propTypes = {
  }
  constructor(props) {
    super(props) 
  }
  render() {
    const {label, category} = this.props
    return (
      <div className="partition">
        <h1 style={{ color: '#c279d0'}}>{label}</h1>
        <List />
      </div>
    )
  }
}
