import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'antd-mobile'
import {Link} from 'react-router-dom'
import ReactSVG  from 'react-svg'
import gridsData from './grids_five'

export default class Pro_Grid_Five extends Component {
  static defaultProps={
    gridSet: gridsData
  }
  static propTypes = {
    gridSet: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.object,
        name: PropTypes.string,
        category: PropTypes.string,
      })
    ).isRequired,
  }

  render() {
    const {gridSet} = this.props
    return (
      <Grid 
        data={gridSet}
        columnNum={5}
        hasLine={false}
        renderItem={item =>  (
          <Link to={item.path}>
            <div  style={{paddingTop: 10}} >
              <ReactSVG src={item.icon} svgStyle={{height:30,width:30}}/>
              <span>{item.name}</span>
            </div>
          </Link>
        )}
      />
    )
  }
}
