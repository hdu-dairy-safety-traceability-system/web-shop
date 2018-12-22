import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import StarRatingComponent from 'react-star-rating-component'
import styled from 'styled-components'
import { Flex, List, Button, Modal, TextareaItem } from 'antd-mobile'

class OrderMadal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
  }

  static defaultProps = {
    visible: false
  }

  state = {
    comment: '',
    rating: 1,
  }

  handleSubmit = () => {
    console.log('submit')
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue })
  }

  render() {
    const {visible, onToggle ,className} = this.props
    const {rating } = this.state
    return (
      <Modal
        visible={visible}
        title="评论"
        className={className}
      >
        <List style={{ backgroundColor: '#f5f5f5' }} renderHeader={() => '给个好评'}>
          <StarRatingComponent
            name="stars"
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick}
            starColor="red"
            emptyStarColor="#e3e3e3"
          />
        </List>

        <List  style={{backgroundColor: '#f5f5f5'}} renderHeader={() => '评论内容'}>
          <TextareaItem
            defaultValue="礼物非常满意，好评！"
            rows={5}
            count={100}
            onChange={(text) => this.setState({commet: text})}
          />
          <Flex justify="around">
            <Button inline onClick={onToggle} type="warning">取消</Button>
            <Button inline onClick={this.handleSubmit} type="primary">评论</Button>
          </Flex>
        </List>
      </Modal>
    )
  }
}

const StyledOrderModal = styled(OrderMadal)`
 & i {
    font-size: 2em;
    margin: 0.5em;
  }
`
export default StyledOrderModal
