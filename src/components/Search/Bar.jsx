import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { SearchBar as AmSearchBar } from 'antd-mobile'

import IndexSearch from '@/network/search'
import throttle from '@/utils/throttle'

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

  handleSearch = text => {
    let searchTerm = text
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

  handleChange = (text,e )=> {
    // e.persist()
    this.throttledSearch(text)
  };

  render() {
    const { classes } = this.props
    const { searchRes } = this.state
    return (
      <div className={classes.searchInput}>
        <AmSearchBar 
          onSubmit={this.handleChange} 
          onChange={this.handleChange} 
          placeholder="Search" 
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