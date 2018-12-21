import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Pro_Grid_Five from './component/Pro_Grid_Five.jsx'
import Pro_Grid_Four from './component/Pro_Grid_Four.jsx'
import { Progress, Button, WingBlank, WhiteSpace, Flex } from 'antd-mobile'
import Avatar from '@/components/base/Avatar'

class ProfileHeader extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    prop: PropTypes
  }

  static defaultProps = {}
  
  state = {
    percent: 50,
  }

  name_data = {
    name: '昵称',
  }
  
  render() {
    const {className} = this.props
    const { percent } = this.state
    const { name } = this.name_data
    
    return (
      <div className={className}>
      
        <div className="header">
          <Flex align="center" justify="start" >
            <Avatar src="https://avatars2.githubusercontent.com/u/22773923?s=40&v=4"/>
            <Flex direction="column" align="start" justify="start">
              <span className="nickname">
                {name}
              </span>
              <div className="progress">
                <Progress percent={percent} position="normal" style={{ width: '150px' }} />
              </div>
              <span className="level">金牌会员</span>
            </Flex>
          </ Flex>
        </div>
        
        <div style={{ marginTop: '5px' }}>
          <Pro_Grid_Five />
        </div>
        <div style={{ marginTop: '5px'}}>
          <Pro_Grid_Four />
        </div>
        <div style={{ height: '5px' }} />
      </div>
    )
  }
}

const StyledProfileHeader = styled(ProfileHeader)`
  // style code here
  background: #ebf0f6;
  .header {
    background: #f06f32;
    height: 150px;
    & > div {
      padding: 3%;
    }
    & img {
      padding: 10px;
    }
  }
  .nickname {
    font-size: 15px;
    color: #fff0bc;
  }
  .progress {
     padding: 10px 0 10px 0;
  }
  .level {
    color: #fff0bc;
    fontSize: 10px;
  }
`

export default StyledProfileHeader
