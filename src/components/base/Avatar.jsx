import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Avatar extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    prop: PropTypes
  }
  state = {
    idle: '',
  }
  static defaultProps = {}
  handleLoad = () =>{
    console.log('load')
    this.setState({idle: 'idle'})
  }
  render() {
    return (
      <img onLoad={this.handleLoad} {...this.props} />
    )
  }
}

const StyledAvatar = styled(Avatar)`
  // style code here
  display: block;
  height: 100%;
  width: 70px;
  border-radius: 50%;
`

export default StyledAvatar
