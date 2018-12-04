import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
export function   svgWrapper(src){
  return <ReactSVG svgStyle={{height: '1em',width: '1em', padding: '0 3px'}} src={src} />
}
export default class Tab extends Component {
  static propTypes = {
    active: PropTypes.bool,
    defaultIcon: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    toggleIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
  }
  static defaultProps = {
    active: false
  }

  state = {
    activeIconIndex: 1 // enum 0/1
  }
  
  renderIcon() {
    const {defaultIcon, active, toggleIcons} = this.props
    if(active) {
      return  svgWrapper(toggleIcons[this.state.activeIconIndex])
    }
    return svgWrapper(defaultIcon)
  }
  handleClick = () => {
    const { active, index, name, onClick} = this.props
    let {activeIconIndex} = this.state
    activeIconIndex = active ? (activeIconIndex + 1) % 2 : 1
    const order = activeIconIndex ? 'desc': 'asc'
    this.setState({activeIconIndex})
    onClick(index, order, name)
  }
  render() {
    const {text} = this.props
    return (
      <div onClick={this.handleClick}>
        <span>
          {text}
        </span>
        {this.renderIcon()}
      </div>
    )
  }
}
