import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import price from '@/jss/base/price'

@withStyles({price})
export default class Price extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    classes: PropTypes.object.isRequired,
  }
  static defaultProps = {
    value: 0,
  }
  render() {
    const {classes, value} = this.props
    return (
      <p className={classes.price}>{value}</p>
    )
  }
}
