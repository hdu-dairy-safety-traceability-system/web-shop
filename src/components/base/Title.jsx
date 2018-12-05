import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Title extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    header: PropTypes.oneOf(['h1','h2','h3','h4','h5']),
  }

  static defaultProps = {
    header: 'h3'
  }

  render() {
    const {header,children} = this.props
    const StyledTitle = styled[header]`
      // style code here
      white-space:nowrap; 
      text-overflow:ellipsis; 
      overflow:hidden;
      margin: 5px 0;
    `
    return (<StyledTitle>{children}</StyledTitle>)
  }
}
