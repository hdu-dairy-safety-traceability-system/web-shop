import React, { Component } from 'react'
// import { Layout } from 'antd'

import ShopHeader from './components/Header'
import TenGrids from './components/TenGrids'
import GiftsPartition from '@/components/Gifts/Partition'
import Section from '@/components/Layout/Section'
import Main from '@/components/Layout/Main'
import Menu from '@/components/Menu'
import CategoryNav from '@/components/CategoryNav'
import SearchBar from '@/components/Search/Bar'
import Footer from '@/components/Footer'
// const { Header, Content, Footer } = Layout


export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Menu> </Menu> */}
        <Main>
          <Section> 
            <SearchBar />
            <ShopHeader />
          </Section>
          <Section className="nav">
            <TenGrids />
          </Section>
          <Section>
            <GiftsPartition label="热门推荐" />
          </Section>
          <Footer>
            我也是有底线的
          </Footer>
        </Main>
      </div>
    )
  }
}
