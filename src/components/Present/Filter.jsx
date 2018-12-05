import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Tabs, Icon} from 'antd-mobile'

import {jdRed} from '@/jss/base/colors'

const tabs = [
  {title: <span>综合<Icon type="up" size="xxs"/></span>},
  {title: '销量'},
  {title: '价格'},
]

export default class PresentFilter extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    const {children} = this.props
    return (
      <Tabs 
        tabs={tabs} 
        initialPage={0} 
        tabBarActiveTextColor={jdRed} 
        tabBarUnderlineStyle={{borderColor: jdRed}}
      >
        {children}
      </Tabs>
    )
  }
}
