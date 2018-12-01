import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PresentDisplay from '@/containers/Present/Display'
export default class PresentDeatial extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    const {match} = this.props
    return (
      <div>
        <PresentDisplay id={match.params.id}/>
      </div>
    )
  }
}
