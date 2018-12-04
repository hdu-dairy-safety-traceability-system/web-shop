import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CartCard from './Card'
import {connect} from 'react-redux'

@connect(store => ({dataSet: store.cart.cart}))
class List extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    dataSet: PropTypes.array.isRequired,
  }

  static defaultProps = {}

  render() {
    const {className, dataSet} = this.props
    return (
      <div className={className}>
        {
          dataSet.map((data,idx) => (
            <CartCard key={idx} data={data} />
          ))
        }
      </div>
    )
  }
}

const StyledList = styled(List)`
  // style code here
  // display: flex;

`

export default StyledList
