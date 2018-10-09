import React, { Component } from 'react'
import PropTypes from 'prop-types'
    
import IndexSearch from '@/Request/search'
// D:\Code\web-shop\src\Utils\throttle.js
import throttle from '@/Utils/throttle'
import './react-search-input.css'

export default class SearchList extends Component {
  static propTypes = {
  }
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchRes: [],
    }
  }
  componentDidMount() {
    // IndexSearch.then(resp => {
    //   this.setState({
    //     products: resp.data.products
    //   })
    // })
  }

  // @ref https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
  searchAction = throttle((e) => {
    IndexSearch({
      q: e.target.value
    }).then( res => {
      this.setState({searchRes: res.data.products})
    }).catch(err => {
      this.setState({seachRes: [{id:0, title: '搜索失败', description: '未找到任何结果'}]})
    })
  }, 1000)

  handleChange = e => {
    e.persist()
    this.searchAction(e)
  }



  render() {
    const {searchRes} = this.state
    return (
      <div className="search-input">
        <input 
          onChange={this.handleChange}
          placeholder="搜索热门商品"
        />
        <ul>
          {
            searchRes.map( (res,idx) => {
              return (
                <li key={idx}>
                  <a href={`/prodocts/${res.id}`}>
                    <span className="title">{res.title}</span>
                    <span className="description">{res.description}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
