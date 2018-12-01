import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {WhiteSpace} from 'antd-mobile'
import withStyles from 'react-jss'

import splitLine from '@/jss/components/Footer'

@withStyles({splitLine})
export default class Footer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    classes: PropTypes.object.isRequired,
  }

  render() {
    const {children,classes} = this.props
    return (
      <div>
        <WhiteSpace />
        <p className={classes.splitLine}>
          {children}
        </p> 
      </div>
    )
  }
}
