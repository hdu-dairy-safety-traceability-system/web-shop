import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CartBar from '@/components/Bottom/CartBar'
import PresentInfo from '@/components/Present/Info'
import ViewWithBar from '@/layouts/ViewWithBar'

import {getPresentById} from '@/network/presents'

export default class PresentDetail extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    info: PropTypes.object.isRequired,
  }
    state = {
      info: {
        images: []
      }
    }
    async componentDidMount(){
      const resp = await getPresentById(this.props.id)
      this.setState({info: resp.data})
    }
    render() {
      const {info} = this.state
      // FIXME
      const {comments, ...present} = info
      return (
        <div>
          <ViewWithBar
            component={<PresentInfo info={info}/>}
            bar={<CartBar data={present}/>}          
          />
        </div>
      )
    }
}
