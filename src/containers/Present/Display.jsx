import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import TopBar from '@/components/TopBar'

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
      const { info, images} = this.state
      // FIXME
      const {comments, ...present} = info
      if(info.id) {
        return (
          <Fragment>
            <TopBar>{info.title}</TopBar>
            <ViewWithBar
              component={<PresentInfo info={info} images={images}/>}
              bar={<CartBar data={present}/>}          
            />
          </Fragment>
        )
      }
      return  null
    }
}
