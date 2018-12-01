import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StarsWrapper = styled.span`
  color: red;
`

function Stars(props) {
  const {count} = props, star = '★'
  let stars = ''
  for(let index = 0; index < count; ++index ) {
    stars += star
  }
  return (
    <StarsWrapper>{stars}</StarsWrapper>
  )
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}
export default Stars