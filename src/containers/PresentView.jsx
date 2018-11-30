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
    refresh: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.refresh()
  }
  render() {
    const {refresh,presentList} = this.props
    
    return (
      <div>
        <PresentFilterTabs onClick={(name, order) => refresh({type: name, order})}/>
        {/* <Drawer
          sidebar={<div style={{width: 300,height: '100%',backgroundColor: '#000'}}></div>}
          position="right"
          open
        > */}
        <PullToRefresh direction="up" onRefresh={()=> refresh() }>
          <PresentList full dataSet={presentList}/>
        </PullToRefresh>
        {/* </Drawer> */}
      </div>
    )
  }
}
