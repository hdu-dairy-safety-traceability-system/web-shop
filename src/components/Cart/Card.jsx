import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'antd-mobile'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {updateCartReq} from '@/redux/actions'
import PresentCard from './PresentCard'
import Radio from '@/components/base/Radio'

@connect(null,{
  updateCartReq,
})
class Card extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    updateCartReq: PropTypes.func.isRequired,
  }

  state = {
    isChecked: !!this.props.data.selected,
  }

  static defaultProps = {}

  handleChange = () => {
    const {updateCartReq, data} = this.props
    const payload = {
      selected: !this.state.isChecked,
      id: data.id
    }
    this.setState({isChecked: payload.selected})
    updateCartReq(payload)
  }

  render() {
    const {className,data} = this.props
    const {isChecked} = this.state
    return (
      <div className={className}>
        <Flex align="center" justify="center">
          <Radio
            selected={isChecked}
            onClick={this.handleChange}
          />
        </Flex>
        <PresentCard data={data} />
      </div>
    )
  }
}

const StyledCard = styled(Card)`
  // style code here
  display: flex;
  align-items: center;
  & > :nth-child(1) {
    width: 60px;
  }
  .my-radio {
    padding: 2.5px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin: 0;
  }
  .am-radio-inner{
  }
`

export default StyledCard

