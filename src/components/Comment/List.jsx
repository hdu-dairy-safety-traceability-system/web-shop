import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Stars from './Stars'

const Item = styled.div`
  padding: 10px;
  border-bottom: 1px solid #dcdcdc;
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
class CommentList extends Component {
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
    const {dataSet, className} = this.props
    return (
      <div className={className}>
        <h2>详情</h2>
        {
          dataSet.length
            ? dataSet.map((data,idx) => this.renderItem(idx, data))
            : <p>还没有评论，赶紧来抢沙发吧！</p>
        }
      </div>
    )
  }
}

const StyledCommentList = styled(CommentList)`
  & h2 {
    text-align: center;
    margin: 10px 0;
  }
  & > p {
    text-align: center;
    margin: 1em;
  }
`

export default StyledCommentList