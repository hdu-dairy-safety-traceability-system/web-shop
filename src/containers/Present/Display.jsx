import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CartBar from '@/components/Bottom/CartBar'
import PresentInfo from '@/components/Present/Info'
import ViewWithBar from '@/layouts/ViewWithBar'

import {getPresentById, getImages} from '@/network/presents'

export default class PresentDetail extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }
    state = {
      info: {},
      images: {
        detial: [],
        carource: [],
      }
    }
    async componentDidMount(){
      const {id} = this.props
      const respPre = await getPresentById(id)
      const respImg = await getImages(id)
      this.setState({ info: respPre.data, images: respImg.data})
    }
    render() {
      console.log(this.props.id)
      const { info, images} = this.state
      // FIXME
      const {comments, ...present} = info
      if(info.id) {
        return (
          <ViewWithBar
            component={<PresentInfo info={info} images={images}/>}
            bar={<CartBar data={present}/>}          
          />
        )
      }
      return  null
    }
}
