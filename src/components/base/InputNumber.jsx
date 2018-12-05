import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Icon} from 'react-icons-kit'
import {androidAdd} from 'react-icons-kit/ionicons/androidAdd'
import {androidRemove} from 'react-icons-kit/ionicons/androidRemove'

class InputNumber extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  }

  static defaultProps = {
    value: 0,
    min: 1,
    max: 20,
  }
  state = {
    value: 0
  }
  plus(value) {
    const {onChange, max} = this.props
    value = parseInt(value)
    if( value < max ) {
      onChange(++value)
    }
  }
  minus(value) {
    let {onChange, min} = this.props
    value = parseInt(value)
    if( min < value ) {
      onChange(--value)
    }
  }
  render() {
    const {className,value, min, max} = this.props
    return (
      <div className={className}>
        <Icon size="18" 
          className={value <= 1 || value <= min ? 'disable': ''} 
          icon={androidRemove} 
          onClick={() => this.minus(value)}
        />
        <span>{value}</span>
        <Icon size="18"  
          className={value >= max ? 'disable': ''}  
          icon={androidAdd}
          onClick={() => this.plus(value)}
        />
      </div>
    )
  }
}

const StyledInputNumber = styled(InputNumber)`
  // style code here
  display:flex;
  align-items: center;
  & > * {
    width: 1.5em;
    padding: 5px;
  }
  .disable {
    color: #aaa;
  }
  & > span {
    text-align: center;
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;
  }
`

export default StyledInputNumber
