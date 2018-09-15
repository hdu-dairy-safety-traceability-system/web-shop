import React, { Component } from 'react'
import { Layout } from 'antd'

import ShopHeader from './Components/Header'
import ProductList from '@/Components/Product/List'
import Section from '@/Components/Layout/Section'
const { Header, Content, Footer } = Layout


export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Section className="shop-bgc"> 
          <ShopHeader />
        </Section>
        <Section>
          <ProductList/>
        </Section>
        <Section>Footer</Section>
      </Layout>
    )
  }
}
