import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'antd-mobile'
import {Link} from 'react-router-dom'
import ReactSVG  from 'react-svg'
import gridsData from './grids_five'

console.log(gridsData)

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
        // hasLine
        hasLine={false}
        renderItem={item => {
          return (
            //<Link to={`/presents?category=${item.category}`}>
            <div style={{ padding: '10px' }}>
              <div style={{marginLeft:'2px'}}><ReactSVG src={item.icon} svgStyle={{height:40,width:40}}/></div>
              <span style={{fontSize:'12px'}}>{item.name}</span>
            </div>
            //</Link>
          )
        }}
      />
    )
  }
}
