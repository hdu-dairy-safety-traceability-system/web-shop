import React, { Component } from 'react'

export default class div_head extends Component {
  render() {
    return (
      <div style={{background:'#f06f32',borderRadius:'0 0 10px 10px',padding:'30px 50px 50px 20px'}}>
        <div style={{height:'80px',width:'80px',borderRadius:'80px',background:'#fcf8f3'}}></div>
        <span>name</span>
      </div>
    )
  }
}
