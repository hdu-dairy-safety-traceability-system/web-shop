import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * 这个组件应该控制的是整个页面的响应式宽度
 */
export default class Section extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}
