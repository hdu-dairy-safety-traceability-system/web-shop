import React, { Component } from 'react'


//import div_head from './component/div_head.jsx'
import MainBar from '@/components/Bottom/MainBar'
import ViewWithBar from '@/layouts/ViewWithBar'
import Body from './Header'
export default class Profile extends Component {
  state = {
    percent: 50,
  };
  name_data = {
    name:'昵称',
  };
  
  render() {

    return (
      <div> 
        <ViewWithBar
          component={<Body />}
          bar={<MainBar />}
        />
      </div>
    )
  }
}
