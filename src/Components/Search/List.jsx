import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchInput, { createFilter } from 'react-search-input'

import ProductReq from '@/Request/home/product'
import './react-search-input.css'
let products = []

export default class SearchList extends Component {
  static propTypes = {
    prop: PropTypes
  }
  static KEYS_TO_FILTERS = ['title','description']
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      products: [],
    }
  }
  searchUpdate = (term) => {
    ProductReq.then(resp => {
      this.setState({
        searchItem: term,
        products: resp.data.products
      })
    })
  }
  render() {
    const {products, searchTerm} = this.state
    console.log(this.state)
    const filteredProducts = products.filter(createFilter(searchTerm, this.KEYS_TO_FILTERS))
    return (
      <div>
        <SearchInput
          className="search-input"
          onChange={this.searchUpdate}
        />
        {
          filteredProducts.map((product,idx) => {
            return (
              <div className="product" key={idx}>
                <div className="from">{product.title}</div>
                <div className="subject">{product.description}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
