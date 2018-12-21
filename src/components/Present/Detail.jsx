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
        <h2>详情</h2>
        {
          details.length
            ? details.map( (image,idx) => (<Image key={idx} src={image} />))
            : <p>详情缺失</p>
        }
      </div>
    )
  }
}

const StyledDetail = styled(Detail)`
  // style code here
  & h2 {
    text-align: center;
  }
  & > p {
    text-align: center;
    margin: 1em;
  }
`

export default StyledDetail
