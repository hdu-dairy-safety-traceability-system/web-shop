import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'antd-mobile'
import {Link} from 'react-router-dom'

import gridsData from './grids'

console.log(gridsData)
import {Icon} from 'react-icons-kit'
export default class TenGrids extends Component {
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
        square
        renderItem={item => {
          return (
            <Link to={`/presents?category=${item.category}`}>
              <div style={{ padding: '12.5px' }}>
                <div style={{margin: '7px'}}><Icon icon={item.icon} /></div>
                <span>{item.name}</span>
              </div>
            </Link>
          )
        }}
      />
    )
  }
}
