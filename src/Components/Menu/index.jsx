import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import {Icon} from 'antd'
const styles = {
  topHeader: {
    height: '100px',
    // width: 变化的
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  list: {
    height: '30px',
    margin: 0,
    padding: 0,
    '& > li': {
      listStyle: 'none',
      fontSize: '20px',
      display: 'inline-block'
    }
  },
  icon: {
    fontSize: '60px'
  }
}
/**
 * 这个组件应该控制的是整个页面的响应式宽度
 */
@withStyles(styles)
export default class TopHeader extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props)
  }
  render() {
    const {classes} = this.props
    return (
      <div className={classes.topHeader}>
        <div className={classes.icon}>
          <Icon  type="shop" theme="outlined" />
          <span>商城</span>
        </div>
        <ul className={classes.list}>
          <li>首页</li>
          <li>经销商入驻</li>
          <li>热点资讯</li>
          <li>帮助中心</li>
          <li>登陆/注册</li>
        </ul>
      </div>
    )
  }
}
