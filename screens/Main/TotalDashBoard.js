import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text } from 'native-base'

const testData = {
  buying: '1,000,000',
  selling: '450,000',
  income: '1,450,000',
  incomeRate: '45'
}

class TotalDashBoard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.totalAmount}>
          <View style={styles.txtOrder}>
            <Text style={styles.txtGray}>매수금</Text>
            <Text>{testData.buying}원</Text>
          </View>
          <View style={styles.txtOrder}>
            <Text style={styles.txtGray}>매도금</Text>
            <Text>{testData.selling}원</Text>
          </View>
        </View>
        <View style={styles.totalRate}>
          <View style={styles.txtOrder}>
            <Text style={styles.txtGray}>수익금</Text>
            <Text style={{ color: 'red' }}>{testData.income}</Text>
          </View>
          <View style={styles.txtOrder}>
            <Text style={styles.txtGray}>수익률</Text>
            <Text style={{ color: 'red' }}>{testData.incomeRate}%</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10
  },
  txtGray: {
    color: 'gray'
  },
  totalAmount: {
    flex: 1,
    borderRightColor: 'gray',
    borderRightWidth: 0.5
  },
  totalRate: {
    flex: 1
  },
  txtOrder: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 7
  }
})

export default TotalDashBoard
