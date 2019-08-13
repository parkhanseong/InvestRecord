import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import MainHeader from '../Base/MainHeader'
import InvestList from './InvestList'
import { AddStock } from '../../components/Main'
import TotalDashBoard from './TotalDashBoard'
import { Container, Content } from 'native-base'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <TotalDashBoard />
      <InvestList />
      <AddStock />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default HomeScreen
