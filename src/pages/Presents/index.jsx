import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import urljoin from 'url-join'

import presentRoute from '@/routes/presents'
export default class Presents extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
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
