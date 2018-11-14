import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Profile from './Profile'
import Test from './Test'
import ButtomBar from '@/components/BottomBar'


export default class Pages extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/profile" component={Profile}></Route>
          <Route exect path="/cart" component={Test}></Route>
          <Route exect path="/" component={Home}></Route>
        </Switch>

        <ButtomBar />
      </div>
    )
  }
}
