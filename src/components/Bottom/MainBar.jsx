import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {Flex} from 'antd-mobile'
import withStyles from 'react-jss'
import Icon from 'react-icons-kit'
import { cart } from 'react-icons-kit/icomoon/cart'
import { home } from 'react-icons-kit/icomoon/home'
import { user } from 'react-icons-kit/icomoon/user'
import styled from 'styled-components'

import TabItem from './TabItem'

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
    to: '/profile',
    icon: user
  }
]

@withStyles(buttomBarStyles)
class MainBar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
  }

  render() {
    const {classes,className} = this.props

    return (
      <Flex className={className} justify="around">
        {
          tabs.map(({to,icon, title, key},idx )=> (
            <TabItem
              title={title}
              key={idx}
              path={to}
              defaultIcon={<Icon icon={icon} className={classes.defaultIcon} />}
              activeIcon={<Icon icon={icon} className={classes.selectedIcon}/>}
            />
          ))
        }
      </Flex>
    )
  }
}

const StyledMainBar = styled(MainBar)`
  width: 100%;
  height: 50px;
`

export default StyledMainBar
