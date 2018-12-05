import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PriceWrapper = styled.p`
  display: inline-block;
  color: #f8513b;
  font-size: 1.3em;
  font-weight: 700;
  &:before {
    content: "¥";
    margin-right: 3px;
  }
`

function Price(props) {
  const {children} = props

  return (
    <PriceWrapper>{parseFloat(children).toFixed(2)}</PriceWrapper>
  )
}
Price.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
}
Price.defaultProps = {
  children: 0
}
export default Price