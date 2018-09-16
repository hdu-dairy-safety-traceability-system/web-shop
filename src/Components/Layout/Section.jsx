import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Section extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  
  constructor(props) {
    super(props)
  }
  render() {
    const {children} = this.props
    return (
      <div style={{
        position: 'relative',
        padding: '0 50px',
        marginTop: '40px',
      }}>
        {children}
      </div>
    )
  }
}
