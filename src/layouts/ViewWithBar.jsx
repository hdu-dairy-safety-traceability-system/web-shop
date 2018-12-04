import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class ViewWithBar extends PureComponent {
  static propTypes = {
    component: PropTypes.element.isRequired,
    bar: PropTypes.element.isRequired,
    className: PropTypes.string.isRequired,
  }
  
  render() {
    const {component,bar,className} = this.props
    return (
      <div className={className}>
        {component}
        {bar}
      </div>
    )
  }
}

const StyledViewWithBar = styled(ViewWithBar)`
  & > :nth-child(1) {
    margin-bottom: 50px;
  }
  & > :nth-child(2) {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`
export default StyledViewWithBar