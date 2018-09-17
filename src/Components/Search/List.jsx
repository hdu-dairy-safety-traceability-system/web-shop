import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchInput, { createFilter } from 'react-search-input'
import {
  SearchBox,
  RefinementListFilter,
  Hits,
  HitsStats,
  SearchkitComponent,
  SelectedFilters,
  MenuFilter,
  HierarchicalMenuFilter,
  Pagination,
  ResetFilters,
  SearchkitManager,
  SearchkitProvider,
} from 'searchkit'
    
import ProductReq from '@/Request/home/product'
import api from '@/Request/api.js'
import './react-search-input.css'

const searchkit = new SearchkitManager(api.root)

export default class SearchList extends Component {
  static propTypes = {
  }
  static KEYS_TO_FILTERS = ['title','description']
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      products: [],
    }
  }
  componentDidMount() {
    ProductReq.then(resp => {
      this.setState({
        products: resp.data.products
      })
    })

  }
  searchUpdate = (term) => {
    this.setState({
      searchTerm: term
    })
  }
  render() {
    console.log(this.state)
    const {products, searchTerm} = this.state
    const filteredProducts = products.filter(createFilter(searchTerm, this.KEYS_TO_FILTERS))
    return (
      <div>
        <SearchkitProvider searchkit={searchkit}>
          <div>
            <SearchBox/>
            <Hits/>
          </div>
        </SearchkitProvider>
      </div>
    )
  }
}
