import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ButtomBar from '@/components/BottomBar'
import routes from '@/routes/index'

export default class Pages extends Component {
  render() {
    return (
      <div>
        <Switch>
          {
            routes.map((route,idx) => (
              <Route key={idx} path="/profile" {...route}/>
            ))
          }
        </Switch>

        <ButtomBar />
      </div>
    )
  }
}
