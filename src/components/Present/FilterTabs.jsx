import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Drawer from 'react-motion-drawer'
import {List, InputItem, Button, Flex} from 'antd-mobile'
import {connect} from 'react-redux'

import { presentFilter } from '@/redux/actions'
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
    name: 'saleCount',
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

@connect(null, {presentFilter})
@withStyles(styles)
export default class FilterTabs extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }
  
  state = {
    activeTabIndex: 0,
    preTabIndex: 0,
    open: false,
    min: 0,
    max: 0,
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
  handleFilter = () => {
    const {min, max} = this.state
    this.toggleFilter()
    this.props.presentFilter({min, max})
  }
  toggleFilter = () => {
    // open Drawer here
    this.setState({open: !this.state.open})
  }

  render() {
    const {classes} = this.props
    const {activeTabIndex, open} = this.state
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
        <div onClick={this.toggleFilter}>
          <span>
            筛选
          </span>
          {svgWrapper(filter)}
        </div>
        <Drawer
          right
          open={open}
          // width
          onOpenChange={this.onOpenChange}
          drawerStyle={{backgroundColor: '#fff'}}
        >
          <List renderHeader={() => '价格区间'}>
            <InputItem
              // {...getFieldProps('preice')}
              onChange={(min) => this.setState({min})}
              placeholder="0.00"
              extra="¥"
            >最低价</InputItem>
            <InputItem
              // {...getFieldProps('preice')}
              onChange={(max) => this.setState({ max })}
              placeholder="0.00"
              extra="¥"
            >最高价</InputItem>
          </List> 
          <Flex justify="around">
            <Button inline size="small" type="warning">取消</Button>
            <Button inline size="small" onClick={this.handleFilter} type="primary">确定</Button>
          </Flex>
        </Drawer>
      </div>
    )
  }
}
