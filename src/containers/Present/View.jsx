import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {PullToRefresh, Drawer} from 'antd-mobile'
import {connect} from 'react-redux'

import PresentList from '@/components/Present/List'
import PresentFilterTabs from '@/components/Present/FilterTabs'
import {refresh} from '@/redux/actions'
  
@connect( store =>({
  presentList: store.present.list
}), {refresh})
export default class PresentView extends Component {
  static propTypes = {
    presentList: PropTypes.array.isRequired,
    refresh: PropTypes.func.isRequired,
    category: PropTypes.string
  }
  state = {
    offset: 1,
    type: 'composite',
    order: 'desc',
  }
  componentDidMount() {
    this.props.refresh({
      offset: 0,
      type: 'composite',
      order: 'desc',
    })
  }
  handleRefresh = () => {
    const {offset, type, order} = this.state
    this.setState({offset: offset + 1})
    this.props.refresh({ offset, type, order })
  }
  handleClick = (name, order) => {
    this.setState({
      type: name, order
    })
    this.props.refresh({ type: name, order })
  }
  render() {
    const {refresh,presentList,category} = this.props
    return (
      <div>
        <PresentFilterTabs onClick={this.handleClick}/>
        <PullToRefresh direction="up" onRefresh={this.handleRefresh}>
          <PresentList full dataSet={presentList}/>
        </PullToRefresh>
        {/* </Drawer> */}
      </div>
    )
  }
}
