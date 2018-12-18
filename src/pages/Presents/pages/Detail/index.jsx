import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import PresentDisplay from '@/containers/Present/Display'
export default class PresentDeatial extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    const {match} = this.props
    return (
      <PresentDisplay id={match.params.id}/>
    )
  }
}
