import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import {Link} from 'react-router-dom'
import cardStyles from '@/jss/components/gifts'
import Price from '@/components/base/Price'

import defaultCover from '@/imgs/gift-default.png'
@withStyles(cardStyles)
export default class PresentCard extends Component {
   static propTypes = {
     data: PropTypes.shape({
       cover: PropTypes.string,
       price:PropTypes.number,
       description: PropTypes.string,
       id: PropTypes.oneOfType([
         PropTypes.number,
         PropTypes.string
       ]).isRequired,
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

  render() {
    const { data, classes } = this.props
    return (
      <div className={classes.cardContianer}>
        <Link to={`/presents/${data.id}`}>
          <img className={classes.responsiveImg} src={data.cover} />
          {/* TODO */}
          <p>{data.title.substring(0, 12)}</p>
          <Price>{data.price}</Price>
        </Link>
      </div>
    )
  }
}
