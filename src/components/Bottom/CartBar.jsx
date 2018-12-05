import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Icon} from 'react-icons-kit'
import ReactSVG from 'react-svg'
import styled from 'styled-components'
import TabItem from './TabItem'
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart'
import kefu from '@/assets/icons/kefu3.svg'
import {connect} from 'react-redux'
import {addToCart} from '@/redux/actions'

const TabBarWrapper = styled.div`
  display: flex;
  & > div {
    display: flex;
    justify-content: center;
    line-height: 50px;
    background-color: #fff;
  }
  & > a {
    height: 50px;
  }
  & > :nth-child(1) {
    flex-grow: 1;
  }
  
  & > :nth-child(2) {
    flex-grow: 1;
  }
  
  & > :nth-child(3) {
    flex-grow: 2;
    // copy from jd
    color: #fff;
    font-weight: 600;
    background: linear-gradient(to right,#FF961E,#F52800);
  }
`

@connect(store => ({cart: store.cart}), {addToCart})
export default class CartBar extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    addToCart: PropTypes.object.isRequired,
  }

  addToCart = () => {
    const { addToCart, data} = this.props
    data.selected = true
    addToCart(data)
  }
  render() {
    return (
      <TabBarWrapper>
        <TabItem
          title="客服"
          path="/kefu"
          defaultIcon={<ReactSVG svgStyle={{ height: '1em', width: '1em' }} src={kefu}/>}
        />
        <TabItem 
          title="购物车"
          path="/cart"
          defaultIcon={<Icon icon={ic_shopping_cart}/>}
        />
        <div onClick={this.addToCart}>
          加入购物车
        </div>
      </TabBarWrapper>
    )
  }
}
