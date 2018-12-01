import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import cardStyles from '@/jss/components/gifts'
import Price from '@/components/base/Price'

import defaultCover from '@/imgs/gift-default.png'
@withStyles(cardStyles)
export default class ProductCard extends Component {
   static propTypes = {
     data: PropTypes.shape({
       cover: PropTypes.string,
       price:PropTypes.number,
       description: PropTypes.string,
       id: PropTypes.number.isRequired,
       // commentCount: PropTypes.number,
     }).isRequired,
     classes: PropTypes.object.isRequired,
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
    const { data, classes } = this.props
    return (
      <div className={classes.cardContianer}>
        <a href={`/presents/${data.id}`}>
          <img className={classes.responsiveImg} src={data.cover} />
          <p>{data.description}</p>
          <Price>{data.price}</Price>
        </a>
      </div>
    )
  }
}
