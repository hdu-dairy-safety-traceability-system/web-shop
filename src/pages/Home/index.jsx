import React, { Component } from 'react'
import { Layout } from 'antd'

import ShopHeader from './Components/Header'
import ProductPartition from '@/Components/Product/Partition'
import Section from '@/Components/Layout/Section'
import CategoryNav from '@/Components/CategoryNav'
const { Header, Content, Footer } = Layout


export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Section> 
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
      </Layout>
    )
  }
}
