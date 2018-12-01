import React, { Component } from 'react'
// import { Menu, Icon } from 'antd'

// const { Item, SubMenu, ItemGroup} = Menu

export default class CategoryNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // current: null,
    }
  }
  hendleChlick = (e)=> {
    this.setState({
      current: e.key,
    })
  }
  render() {
    // const current = this.state.current
    return (
      <div></div>
    )
  }
}
