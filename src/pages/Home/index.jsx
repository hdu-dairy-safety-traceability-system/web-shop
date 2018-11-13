import React, { Component } from 'react'
// import { Layout } from 'antd'

import ShopHeader from './components/Header'
import ProductPartition from '@/components/Product/Partition'
import Section from '@/components/Layout/Section'
import Main from '@/components/Layout/Main'
import Menu from '@/components/Menu'
import CategoryNav from '@/components/CategoryNav'
import SearchBar from '@/components/Search/Bar'
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
