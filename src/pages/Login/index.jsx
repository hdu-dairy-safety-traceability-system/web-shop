import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button, List, Toast, NavBar, Icon,InputItem} from 'antd-mobile'
import withStyles from 'react-jss'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

import {login, loginSuccess} from '@/redux/actions'
import styles from '@/jss/components/login'

function toast(type) {
  switch(type) {
  case 'failed': 
    Toast.fail('用户名或密码错误')
    break
  case 'success': 
    Toast.info('登陆成功！')
    break
  }
}

@connect( store => ({state: store.login}), {login})
@withStyles(styles)
export default class Login extends Component {
  static propTypes = {
    classes: PropTypes.object,
    state: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
  }
  
  state = {
    username: 'test',
    password: '123456'
  }

  static getDerivedStateFromProps(props, state) {
    toast(props.state.loginState)
    return null
  }
  handleChange = (term) => {
    this.setState(term)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state)
 
  }

  render() {
    const {classes, state} = this.props
    const {username, password} = this.state

    return (
      <div>
        {
          state.logined ? <Redirect to='/'/>
            :  (<div>
              <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
              >
              密码登陆
              </NavBar>
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
            </div>)
        
        }
       
      </div>
    )
  }
}
