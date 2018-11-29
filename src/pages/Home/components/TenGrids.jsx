import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'antd-mobile'

import gridsData from './grids'
import {Icon} from 'react-icons-kit'
export default class TenGrids extends Component {
  static defaultProps={
    gridSet: gridsData
  }
  static propTypes = {
  }

  render() {
    const {gridSet} = this.props
    return (
      <Grid 
        data={gridSet}
        columnNum={5}
        // hasLine
        square
        renderItem={item => {
          return (
            <div style={{ padding: '12.5px' }}>
              <div style={{margin: '7px'}}><Icon icon={item.icon} /></div>
              <span>{item.name}</span>
            </div>
          )
        }}
      />
    )
  }
}

{/* <div style={{ padding: '12.5px' }}>
  <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
  <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
    <span>I am title..</span>
  </div>
</div> */}