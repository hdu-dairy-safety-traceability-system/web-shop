import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button, List, NavBar, Icon,InputItem} from 'antd-mobile'
import withStyles from 'react-jss'

import styles from '@/jss/components/login'
@withStyles(styles)
export default class Login extends Component {
  static propTypes = {
  }
  state = {
    username: '',
    password: ''
  }
  handleChange = (term) => {
    this.setState(term)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    const {classes} = this.props
    const {username, password} = this.state
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
        >密码登陆</NavBar>
        <List>
          <InputItem
            className={classes.input}
            placeholder="请输入帐号"
            updatePlaceholder
            value={username}
            onChange={(text) =>this.handleChange({username: text}) }
          />
          <InputItem
            className={classes.input}
            placeholder="请输入密码"
            type="password"
            updatePlaceholder
            value={password}
            onChange={(text) => this.handleChange({ password: text })}
          />
        </List>
        <Button onClick={this.handleSubmit} type="warning" className={classes.button}>登陆</Button>
      </div>
    )
  }
}