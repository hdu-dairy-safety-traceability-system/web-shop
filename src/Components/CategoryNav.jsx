import React, { Component } from 'react'
import { Menu, Icon } from 'antd'

const { Item, SubMenu, ItemGroup} = Menu

export default class CategoryNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // current: null,
    }
  }
  hendleChlick = (e)=> {
    console.log(e)
    this.setState({
      current: e.key,
    })
  }
  render() {
    const current = this.state.current
    return (
      <Menu
        onClick={this.hendleChlick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Item key="1">
          <Icon type="fund" theme="outlined" />礼品
        </Item>

        <Item key="2">
          <Icon type="fund" theme="outlined" /> 礼品
        </Item>

        <Item key="3">
          <Icon type="fund" theme="outlined" /> 礼品
        </Item>

        <Item key="4">
          <Icon type="fund" theme="outlined" />礼品
        </Item>
        
        <Item key="5">
          <Icon type="fund" theme="outlined" />礼品
        </Item>

        <Item key="6">
          <Icon type="fund" theme="outlined" /> 礼品
        </Item>

        <Item key="7">
          <Icon type="fund" theme="outlined" /> 礼品
        </Item>

        <Item key="8">
          <Icon type="fund" theme="outlined" />礼品
        </Item>

        <Item key="9">
          <Icon type="fund" theme="outlined" /> 礼品
        </Item>
        <SubMenu title={<span><Icon type="fund" theme="outlined" />SubMenu</span>}>
          <ItemGroup title="item">
            <Item key="sub1">
              SubItem1
            </Item>
            <Item key="sub2">
              SubItem2
            </Item>
            <Item key="sub3">
              SubItem3
            </Item>
          </ItemGroup>
        </SubMenu>
      </Menu>
    )
  }
}
