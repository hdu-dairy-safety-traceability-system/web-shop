import React, { Component } from 'react'
import PropTypes from 'prop-types'

import List from './List'
export default class Partition extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props) {
    super(props) 
  }
  render() {
    const {label, category} = this.props
    return (
      <div className="partition">
        <h1>{label}</h1>
        <List />
      </div>
    )
  }
}
