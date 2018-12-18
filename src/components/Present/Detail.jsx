import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from '@/components/base/Image'

class Detail extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    details: PropTypes.array.isRequired,
  }

  static defaultProps = {}

  render() {
    const {className, details} = this.props
    // console.log(details)
    return (
      <div className={className}>
        {
          details.map( (image,idx) => (<Image key={idx} src={image} />))
        }
      </div>
    )
  }
}

const StyledDetail = styled(Detail)`
  // style code here
`

export default StyledDetail
