import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from '@/routes/index'

export default class Pages extends Component {
  render() {
    return (
      <div>
        <Switch>
          {
            routes.map((route,idx) => (
              <Route key={idx}  {...route}/>
            ))
          }
        </Switch>
      </div>
    )
  }
}
