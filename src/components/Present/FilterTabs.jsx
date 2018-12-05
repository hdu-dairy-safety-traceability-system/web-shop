import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import FilterTab, {svgWrapper} from './FilterTab'
import filter from '@/assets/icons/filter.svg'
// 升序
import sortAsc from '@/assets/icons/sortAsc.svg'
// 降序
import sortDesc from '@/assets/icons/sortDesc.svg'
import sort from '@/assets/icons/sort.svg'

const styles = {
  tabList: {
    display: 'flex',
    width: '100%',
    height:  '43.5px',
    alignItems: 'center',
    justifyContent: 'space-around',
    '& > div': {
      padding: '8px 0',
      display: 'flex',
      alignItems: 'center',
    }
  }
}

const tabs = [
  {
    text: '综合',
    name: 'composite',
    defaultIcon: sort,
    toggleIcons: [
      sortAsc,
      sortDesc,
    ],
  },{
    text: '销量',
    name: 'sales',
    defaultIcon: sort,
    toggleIcons: [
      sortAsc,
      sortDesc,
    ],
  },{
    text: '价格',
    name: 'price',
    defaultIcon: sort,
    toggleIcons: [
      sortAsc,
      sortDesc,
    ],
  },
]


@withStyles(styles)
export default class FilterTabs extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }
  
  state = {
    activeTabIndex: 0,
    preTabIndex: 0,
  }

  handleClick = (index, order, name) => {
    const {onClick} = this.props
    let {activeTabIndex, preTabIndex} = this.state
    if(index === activeTabIndex) {
      onClick(name, order)
    }else {
      preTabIndex = activeTabIndex
      this.setState({preTabIndex,activeTabIndex: index})
      onClick(name, order)
    }
  }

  showFilter = () => {
    // open Drawer here
  }

  render() {
    const {classes} = this.props
    const {activeTabIndex} = this.state
    return (
      <div className={classes.tabList}>
        {
          tabs.map((tab,idx) =>(
            <FilterTab
              key={idx}
              active={activeTabIndex == idx}
              index={idx}
              onClick={this.handleClick}
              {...tab}
            />
          ))
        }
        <div onClick={this.showFilter}>
          <span>
            筛选
          </span>
          {svgWrapper(filter)}
        </div>
      </div>
    )
  }
}
