import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {PullToRefresh} from 'antd-mobile'
import {connect} from 'react-redux'

import PresentList from '@/components/Present/List'
import PresentFilter from '@/components/Present/Filter'
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
        <PullToRefresh direction="up" onRefresh={()=> refresh() }>
          <PresentList full dataSet={presentList}/>
        </PullToRefresh>
        {/* <PresentFilter>
          <PullToRefresh direction="up" onRefresh={()=> refresh() }>
            <PresentList full dataSet={presentList}/>
          </PullToRefresh>
        
          <PullToRefresh direction="up" onRefresh={()=> refresh() }>
            <PresentList full dataSet={presentList}/>
          </PullToRefresh>

          <PullToRefresh direction="up" onRefresh={()=> refresh() }>
            <PresentList full dataSet={presentList}/>
          </PullToRefresh>
        </PresentFilter> */}
      </div>
    )
  }
}
