import React, { Component } from 'react'
import {NavBar} from 'antd-mobile'
// import { Layout } from 'antd'

import ShopHeader from './components/Header'
import TenGrids from './components/TenGrids'
import PresentPartition from '@/components/Present/Partition'
import Section from '@/components/Layout/Section'
import Main from '@/components/Layout/Main'
import Menu from '@/components/Menu'
import CategoryNav from '@/components/CategoryNav'
import SearchBar from '@/components/Search/Bar'
import Footer from '@/components/Footer'

import ButtomBar from '@/components/BottomBar'
// const { Header, Content, Footer } = Layout

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Menu> </Menu> */}
        <Main>
          <Section> 
            {/* <NavBar mode="light"> */}
            <SearchBar />
            {/* </NavBar> */}
            <ShopHeader />
          </Section>
          <Section className="nav">
            <TenGrids />
          </Section>
          <Section>
            <PresentPartition label="热门推荐" />
          </Section>
          <Footer>
            我也是有底线的
          </Footer>
        </Main>
        <ButtomBar />
      </div>
    )
  }
}
