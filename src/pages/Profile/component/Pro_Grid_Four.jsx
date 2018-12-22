import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'antd-mobile'
import {Link} from 'react-router-dom'
import ReactSVG  from 'react-svg'
import gridsData from './grids_four'

import {Icon} from 'react-icons-kit'
//import { width } from 'window-size';
export default class Pro_Grid_Four extends Component {
  static defaultProps={
    gridSet: gridsData
  }
  static propTypes = {
    gridSet: PropTypes.arrayOf(
      PropTypes.shape({
        num: PropTypes.string,
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
        columnNum={4}
        hasLine={false}
        itemStyle={{height:'80px'}}
        renderItem={item => {
          return (
            <div style={{paddingTop: 10}}>
              <div><span style={{fontSize:'30px',color:'#ff0000'}}>{item.num}</span></div>
              <span style={{fontSize:'12px'}}>{item.name}</span>
            </div>
          )
        }}
      />
    )
  }
}
