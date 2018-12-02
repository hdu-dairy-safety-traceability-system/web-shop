import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { NavBar, Icon } from 'antd-mobile'
// import {Icon} from 'react-icons-kit'
// import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left'
import styled from 'styled-components'
import {all} from '@/network/cart'
import CartList from '@/components/Cart/List'

class Cart extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired
  }

  state = {
    list: []
  }
  async componentDidMount() {
    const resp = await all()
    this.setState({list: resp.data.presents})
  }
  
  static defaultProps = {}
 
  render() {
    const {className} = this.props
    const {list} = this.state
    return (
      <div className={className}>
        <NavBar
          icon={<Icon type="left"/>}
          mode="light"
          //https://reacttraining.com/react-router/web/api/history
          onLeftClick={() => window.history.back()}
        >
          购物车
        </NavBar>
        <CartList dataSet={list}/>
      </div>
    )
  }
}

const StyledCart = styled(Cart)`
  // style code here
`

export default StyledCart
