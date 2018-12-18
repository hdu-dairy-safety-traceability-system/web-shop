import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Icon, NavBar} from 'antd-mobile'

export default class TopBar extends PureComponent {
  static propTypes = {

  }

  render() {
    return (
      <NavBar
        icon={<Icon type="left" />}
        mode="light"
        //https://reacttraining.com/react-router/web/api/history
        onLeftClick={() => window.history.back()}
      >
        {this.props.children}
      </NavBar>
    )
  }
}
