import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import MainHeader from '../Base/MainHeader'
import InvestList from './InvestList'
import TotalDashBoard from './TotalDashBoard'
import { Container, Content } from 'native-base'

const HomeScreen = () => {
  return (
    <Container>
      <MainHeader />
      <Content>
        <TotalDashBoard />
        <InvestList />
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})

export default HomeScreen
