import React, { Component } from 'react'
import withStyles from 'react-jss'
const styles = {
  cardContianer: {
    width: '50%', 
    display: 'inline-block',
    boxSizing: 'border-box', 
    padding: '0 20px'
  },
  responsiveImg: { 
    display: 'block', 
    height: 'auto', 
    maxWidth: '100%' 
  },
  price: {
    color: '#f8513b',
    '&::before': {
      //@ref  https://stackoverflow.com/questions/40965977/cant-target-before-pseudo-selector-in-jss
      content: '"¥"',
      marginRight: '3px'
    },
  }
}
@withStyles(styles)
export default class ProductCard extends Component {
  static defaultProps = {
    data: {
      cover: '',
      title: 'No Name',
      description: 'no description',
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
    const { data, loading,classes} = this.props
    return (
      <div className={classes.cardContianer}>
        <img className={classes.responsiveImg} src={data.cover}/>
        <p>{data.description}</p>
        <p className={classes.price}>{data.price}</p>
      </div>
    )
  }
}
