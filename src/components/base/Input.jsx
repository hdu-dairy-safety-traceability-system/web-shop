import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './input.css'
const style = {
  
}
export default class Input extends Component {
  static propTypes = {
  }

  render() {
    const {onChange, restProps} = this.props
    return (
      <input type="text" 
        className="form-control" 
        placeholder="search" 
        onChange={ e => onChange(e.target.value)}
        {...restProps}
      />
    )
  }
}
