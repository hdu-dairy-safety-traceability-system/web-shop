import React, { Component } from 'react'
import { Icon, Avatar,Card} from 'antd'

const {Grid, Meta} = Card
export default class ProductCard extends Component {
  static defaultProps = {
    data: {
      cover: '',
      title: 'No Name',
      description: 'no description',
    }
  }
  constructor(props) {
    super(props)
    this.stete = {}
  }

  handleClick(e) {
    console.log(e)
  }

  render() {
    loading
    const { data, loading} = this.props
    return (
      <Card
        style={{ width: 300, margin: '30px' }}
        cover={<img alt="Product Cover" src={data.cover} />}
        onClick={this.handleClick}
        loading={loading}
        hoverable
      >
        <Meta
          title={data.title}
          description={data.description}
        />
      </Card>
    )
  }
}
