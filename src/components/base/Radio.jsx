import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Icon} from 'react-icons-kit'
import {checkmark} from 'react-icons-kit/icomoon/checkmark'
class Radio extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  static defaultProps = {}

  render() {
    const {className, onClick} = this.props
    return (
      <span onClick={onClick} className={className}>
        <Icon icon={checkmark}/>
      </span>
    )
  }
}

const StyledRadio = styled(Radio)`
  // style code here
    display: inline-block;
    padding: 2.5px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin: 0;
    height: 1.2em;
    width: 1.2em;
    background-color: ${ props => props.selected ? 'red' : '#fff'};
    & > div {
      color: #fff;
      display: ${ props => props.selected ? 'inline-block' : 'none !important'};
    }
`

export default StyledRadio
