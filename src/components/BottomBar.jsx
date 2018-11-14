import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { TabBar } from 'antd-mobile'
import Icon from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { cart } from 'react-icons-kit/icomoon/cart'
import { user } from 'react-icons-kit/icomoon/user'
import {Link} from 'react-router-dom'

import buttomBarStyles from '@/jss/components/ButtomBar'
const tabs = [
  {
    key: 'home',
    title: '主页',
    to: '/',
    icon: home
  },{

    key: 'cart',
    title: '购物车',
    to: '/cart',
    icon: cart,
  },{
    key: 'user',
    title: '我的',
    to: '/user',
    icon: user
  }
]
const {Item} = TabBar
@withStyles(buttomBarStyles)
export default class BottomBar extends Component {
  static propTypes = {
  }

  state = {
    selectedTab: 0
  }

  handlePress = (selectedTab) => {
    console.log(selectedTab)
    this.setState({selectedTab})
  }
  render() {
    const {classes} = this.props
    const {selectedTab} = this.state
    console.log(this.state)
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          tintColor="#aaa"
          unselectedTintColor="#000"
          tabBarPosition="bottom"
        >
          {
            tabs.map(({to,icon, title, key},idx )=> (
              <Item
                title={title}
                key={key}
                icon={<Link to={to}><Icon icon={icon} className={classes.defaultIcon} /></Link>}
                selectedIcon={<Icon icon={icon} className={classes.selectedIcon}/>}
                selected={selectedTab === idx}
                onPress={() => {this.handlePress(idx)}}
              />
            ))
          }
        </TabBar>
      </div>
    )
  }
}
