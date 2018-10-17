import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Input} from 'antd'
import injectSheet from 'react-jss'

const {Search} = Input

import IndexSearch from '@/Request/search'
import throttle from '@/Utils/throttle'

const styles = {
  searchInput: {
    padding: '10px 10px',
    position: 'relative',
    height: '70px',
    zIndex: '600',
  },
  list: {
    position: 'relative',
    listStyleType: 'none',
    backgroundColor:' #fff',
    margin: '5px 0',
    borderRadius: '10px',
    '& li': {
      textAlign: 'left',
      '& a .title': {
        fontSize: '20px',
        margin: '0 12px',
        color: '#828080'
      },
      '& a .description': {
        fontSize: '12px',
        color: '#a8a8a8',
      }
    }
  }
}

// @rel https://github.com/tc39/proposal-decorators/issues/69
@injectSheet(styles)
export default class SearchBar extends Component {
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {
      searchRes: []
    }
  }

  handleSearch = e => {
    let searchTerm = e.target.value
    if (searchTerm !== '') {
      IndexSearch({ q: searchTerm })
        .then(res => {
          this.setState({ searchRes: res.data.products })
        })
        .catch(err => {
          this.setState({
            seachRes: [
              { id: 0, title: '搜索失败', description: '未找到任何结果' }
            ]
          })
        })
    } else {
      this.setState({ searchRes: [] })
    }
  };
  /**
   * 有个问题: 现在触发方法应该取消前一次触发的方法
   *
   * @memberof SearchBar
   * @see https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
   */
  throttledSearch = throttle(this.handleSearch, 500);

  handleChange = e => {
    e.persist()
    this.throttledSearch(e)
  };

  render() {
    const { classes } = this.props
    const { searchRes } = this.state
    return (
      <div className={classes.searchInput}>
        <Search
          placeholder="搜索热门商品"
          onSearch={this.handleChange}
          onChange={this.handleChange}
          size="large"
        />
        <ul className={classes.list}>
          {searchRes.map((res, idx) => {
            return (
              <li key={idx}>
                <a href={`/prodocts/${res.id}`}>
                  <span className="title">{res.title}</span>
                  <span className="description">{res.description}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
