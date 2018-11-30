import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import List from './List'
import splitLine from '@/jss/components/Gifts/Partition'

@withStyles({ splitLine})
export default class Partition extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
  }

  render() {
    const {label, classes} = this.props
    console.log(classes)
    return (
      <div >
        <h1 className={classes.splitLine} style={{ color: '#c279d0'}}>{label}</h1>
        <List />
      </div>
    )
  }
}
