import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, Link} from 'react-router-dom'
import urljoin from 'url-join'

import presentRoute from '@/routes/presents'
export default class Presents extends Component {
  static propTypes = {
  }

  render() {
    const {match} = this.props
    return (
      <div>
        {
          presentRoute.map( ({path, ...restProps},idx) => (
            <Route key={idx} path={urljoin(match.path, path)} {...restProps}/>
          ))
        }
      </div>
    )
  }
}
