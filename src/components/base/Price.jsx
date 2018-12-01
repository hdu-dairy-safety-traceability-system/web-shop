import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PriceWrapper = styled.p`
  color: #f8513b;
  font-size: 1.3em;
  font-weight: 700;
  // margin: 0 0;

  &:before {
    content: "¥";
    margin-right: 3px;
  }
`

function Price(props) {
  const {children} = props

  return (
    <PriceWrapper>{children}</PriceWrapper>
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