import React, { Component } from 'react'
// import { Layout } from 'antd'

import ShopHeader from './Components/Header'
import ProductPartition from '@/Components/Product/Partition'
import Section from '@/Components/Layout/Section'
import Main from '@/Components/Layout/Main'
import Menu from '@/Components/Menu'
import CategoryNav from '@/Components/CategoryNav'
import SearchBar from '@/Components/Search/Bar'
// const { Header, Content, Footer } = Layout


export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu> </Menu>
        <Main>
          <Section> 
            <SearchBar />
            <ShopHeader />
          </Section>
          <Section className="nav">
            <CategoryNav />
          </Section>
          <Section>
            <ProductPartition label="智能先锋" />
            <ProductPartition  label="都市丽人"/>
          </Section>
          <Section>Footer</Section>
        </Main>
      </div>
    )
  }
}
