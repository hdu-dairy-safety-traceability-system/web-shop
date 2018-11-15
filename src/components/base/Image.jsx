import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import responsiveImg from '@/jss/base/responsiveImg'

@withStyles({responsiveImg})
export default class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  }

  render() {
    const {src, classes} = this.props
    return (
      <img src={src} className={classes.responsiveImg}/>
    )
  }
}
