import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from '@/components/base/Image'
import Stars from './Stars'

const Item = styled.div`
  // height: 4em;
  padding: 10px;
  border-bottom: 1px solid #dcdcdc;
  // header
  & div,
  & span {
    display: flex;
    align-items: center;
  }
  & > div {
    justify-content: space-between;
  }
  & > div > div > span {
    margin: 0 6px;
  }
  & img {
    height: 1.5em;
    width: 1.5em;
    border-radius:50%;
  }
  & > p {
    line-height: 2em;
    margin: 6px 0;
  }
`
export default class CommentList extends Component {
  static propTypes = {
    dataSet: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.string,
        username: PropTypes.string,
        content: PropTypes.string,
        stars: PropTypes.number,
      })
    ).isRequired,
  }
  static defaultProps = {
    dataSet: []
  }

  renderItem(key, data) {
    const {avatar,username, content, stars} = data
    return (
      <Item key={key}>
        <div>
          <div>
            <img src={avatar}/>
            <span>{username}</span>
          </div>
          <Stars count={stars} />
        </div>
        <p>{content}</p>
      </Item>
    )
  }
  render() {
    const {dataSet} = this.props
    return (
      <div>
        {
          dataSet.map((data,idx) => this.renderItem(idx, data))
        }
      </div>
    )
  }
}
