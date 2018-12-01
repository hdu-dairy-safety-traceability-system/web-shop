import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {WingBlank, WhiteSpace} from 'antd-mobile'

import Image from '@/components/base/Image'
import PresentInfo from '@/components/Present/Info'
import CommentList from '@/components/Comment/List'
import {getPresentById} from '@/network/presents'

const GraySpace = styled.div`
  background-color: #f5f5f5;
  height: 2em;
`
export default class PresentDetail extends Component {
  static propTypes = {
  }
    state = {
      info: {
        imgUrls: []
      }
    }
    async componentDidMount(){
      const resp = await getPresentById(this.props.id)
      this.setState({info: resp.data})
    }
    render() {
      const {info: {comments, ...present}} = this.state
      return (
        <div>
          <PresentInfo info={present}/>
          <GraySpace />
          <CommentList dataSet={comments}/>
        </div>
      )
    }
}
