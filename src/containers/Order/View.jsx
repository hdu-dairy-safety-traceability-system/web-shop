import React, {Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import {all as getAll} from '@/network/order'

import OrderList from '@/components/Order/List'
import TopBar from '@/components/TopBar'

export default class OrderView extends Component {
  static propTypes = {
  }
  
  state = {
    data: []
  }

  async componentDidMount() {
    const resp = await getAll()
    this.setState({data: resp.data})
  }
  render() {
    const {data} = this.state
    return (
      <Fragment>
        <TopBar>历史订单</TopBar>
        <OrderList orderSet={data}/>
      </Fragment>
    )
  }
}
