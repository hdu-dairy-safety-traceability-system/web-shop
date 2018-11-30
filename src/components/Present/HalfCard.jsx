import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import cardStyles from '@/jss/components/gifts'

import defaultCover from '@/imgs/gift-default.png'
@withStyles(cardStyles)
export default class ProductCard extends Component {
   static propTypes = {
     data: PropTypes.shape({
       cover: PropTypes.string,
       price:PropTypes.number,
       description: PropTypes.string,
       // commentCount: PropTypes.number,
     }).isRequired,
   }

  static defaultProps = {
    data: {
      cover: defaultCover,
      title: 'No Name',
      description: 'no description'
    }
  }

  constructor(props) {
    super(props)
    this.stete = {}
  }

  handleClick(e) {
    console.log(e)
  }

  render() {
    // console.log(this.props.data.cover)
    const { data, loading, classes } = this.props
    return (
      <div className={classes.cardContianer}>
        <a href="/">
          <img className={classes.responsiveImg} src={data.cover} />
          <p>{data.description}</p>
          <p className={classes.price}>{data.price}</p>
        </a>
      </div>
    )
  }
}
