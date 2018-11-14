import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { TabBar } from 'antd-mobile'
import Icon from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { cart } from 'react-icons-kit/icomoon/cart'
import { user } from 'react-icons-kit/icomoon/user'

import buttomBarStyles from '@/jss/components/ButtomBar'

const {Item} = TabBar
@withStyles(buttomBarStyles)
export default class BottomBar extends Component {
  static propTypes = {
  }

  state = {
    selectedTab: 1
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
          <Item
            key="home"
            title="主页"
            icon={<Icon icon={home} className={classes.defaultIcon}/>}
            selectedIcon={<Icon icon={home} className={classes.selectedIcon}/>}
            selected={selectedTab === 1}
            onPress={() => {console.log('msg'); this.handlePress(1)}}
          />
          <Item
            key="cart"
            title="购物车"
            icon={<Icon icon={cart} className={classes.defaultIcon} />}
            selectedIcon={<Icon icon={home} className={classes.selectedIcon} />}
            selected={selectedTab === 2}
            onPress={() => this.handlePress(2)}
          />
          <Item
            key="user"
            title="我的"
            icon={<Icon icon={user} className={classes.defaultIcon} />}
            selectedIcon={<Icon icon={home} className={classes.selectedIcon} />}
            selected={selectedTab === 3}
            onPress={() => this.handlePress(4)}
          />
        </TabBar>
      </div>
    )
  }
}
