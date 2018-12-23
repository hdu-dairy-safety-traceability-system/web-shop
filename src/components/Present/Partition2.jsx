import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import List from './List'
import splitLine from '@/jss/components/Gifts/Partition'
import {recommend2} from '@/network/presents'

@withStyles({ splitLine})
export default class Partition extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
  }
  state = {
    recommendList: []
  }
  async componentDidMount(){
    const resp = await recommend2()
    this.setState({recommendList: resp.data})
  }
  render() {
    const {label, classes} = this.props
    const {recommendList} = this.state
    return (
      <div >
        <h1 className={classes.splitLine} >{label}</h1>
        <List dataSet={recommendList}/>
      </div>
    )
  }
}
