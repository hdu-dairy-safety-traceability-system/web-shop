import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {gray} from '@/jss/base/colors'
import OrderView from '@/containers/Order/View'
export default class OrderIndex extends Component {
  static propTypes = {
  }

  render() {
    return (
      <OrderView />
    )
  }
}
