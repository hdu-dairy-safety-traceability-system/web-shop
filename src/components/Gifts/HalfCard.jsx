import React, { Component } from 'react'
import withStyles from 'react-jss'

import cardStyles from '@/jss/components/gifts'

import defaultCover from '@/imgs/gift-default.png'
@withStyles(cardStyles)
export default class ProductCard extends Component {
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
