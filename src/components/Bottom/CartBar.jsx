import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TabBarWrapper = styled.div`
  display: flex;
  & > div {
    display: flex;
    justify-content: center;
    line-height: 50px;
    background-color: #fff;
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
export default class CartBar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <TabBarWrapper>
        <div>
          客服
        </div>
        <div>
          购物车
        </div>
        <div>
          加入购物车
        </div>
      </TabBarWrapper>
    )
  }
}
