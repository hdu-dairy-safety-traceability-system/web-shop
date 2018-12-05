import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import styled from 'styled-components'
const {pathname} = window.location
class TabItem extends Component {
  static propTypes = {
    activeIcon: PropTypes.element.isRequired,
    className: PropTypes.string.isRequired,
    defaultIcon: PropTypes.element.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {}

  render() {
    const { activeIcon, className, defaultIcon, path, title} = this.props
    return (
      <Link className={className} to={path}>
        {pathname == path ? activeIcon : defaultIcon}
        <span>
          {title}
        </span>
      </Link>
    )
  }
}

const StyledTabItem = styled(TabItem)`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  height: 100%;
  background-color: #fff;
  &   span {
    margin-top: 3px;
    font-size: 0.5em;
  }
`

export default StyledTabItem
