import React, { Component } from 'react'

import ShopHeader from './components/Header'
import TenGrids from './components/TenGrids'
import PresentPartition from '@/components/Present/Partition'
import PresentPartition2 from '@/components/Present/Partition2'
import SearchBar from '@/components/Search/Bar'
import Footer from '@/components/Footer'
import ViewWithBar from '@/layouts/ViewWithBar'
import MainBar from '@/components/Bottom/MainBar'

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <ViewWithBar
          component={
            <div>
              <SearchBar />
              <ShopHeader />
              <TenGrids />
              <PresentPartition label="热门推荐" />

              <PresentPartition2 label="特色推荐" />
              <Footer>我也是有底线的</Footer>
            </div>
          }
          bar={<MainBar />}
        />
      </div>
    )
  }
}
