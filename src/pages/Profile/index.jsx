import React, { Component } from 'react'
import Pro_Grid_Five from './component/Pro_Grid_Five.jsx'
import Pro_Grid_Four from './component/Pro_Grid_Four.jsx'
import { Progress, Button, WingBlank, WhiteSpace } from 'antd-mobile'


//import div_head from './component/div_head.jsx'
import MainBar from '@/components/Bottom/MainBar'
import ViewWithBar from '@/layouts/ViewWithBar'
export default class Profile extends Component {
  state = {
    percent: 50,
  };
  name_data = {
    name:'昵称',
  };
  
  render() {
    const { percent } = this.state
    const { name } = this.name_data
    return (
      <div> 
        <ViewWithBar
          component={
            <div style={{background:'#ebf0f6'}}>
              <div style={{background:'#f06f32',borderRadius:'0 0 7px 7px',padding:'30px 50px 50px 20px',height:'80px'}}>
                <div style={{height:'80px',width:'80px',borderRadius:'80px',background:'#fcf8f3',float:'left'}}></div>

                <div className="show-info" style={{marginLeft:'100px',marginTop:'20px'}}>
                  <span style={{marginLeft:'0px',fontSize:'15px',color:'#fff0bc'}}>{ name }</span>
                  <div className="progress" style={{padding:'10px 0 10px 0'}}><Progress percent={percent} position="normal" style={{width:'150px'}}/></div>
                  <span style={{marginLeft:'50px',color:'#fff0bc',fontSize:'10px'}}>金牌会员</span>
                  <Button size="small" style={{color:'#fff0bc',borderColor:'#fff0bc',marginLeft:'200px',background:'#f06f32',fontSize:'10px'}} inline>小白成长积分</Button>
                  
                </div>


              </div>
              <div style={{marginTop:'5px'}}>
                <Pro_Grid_Five/>
              </div>
              <div style={{marginTop:'5px',height:'80px'}}>
                <Pro_Grid_Four/>
              </div>
              <div style={{height:'5px'}}/>
            </div>
          }
          bar={<MainBar />}
        />
      </div>
    )
  }
}
