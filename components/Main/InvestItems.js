import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text } from 'native-base'
import { commonStyle } from '../../lib/styleUtils'

const testData = [
  {
    stockName: '아프리카TV',
    buyPrice: '54,000',
    buyDate: '2019-07-31'
  },
  {
    stockName: '네이버',
    buyPrice: '134,000',
    buyDate: '2019-07-31'
  },
  {
    stockName: '카카오',
    buyPrice: '114,000',
    buyDate: '2019-07-31'
  }
]

class InvestItems extends React.Component {
  renderItems = ({ item }) => {
    return (
      <View style={styles.wrapperItem}>
        <View style={[commonStyle.center, styles.stockItemName]}>
          <Text>{item.stockName}</Text>
        </View>
        <View style={[commonStyle.center, styles.buyPrice]}>
          <Text>{item.buyPrice}원</Text>
        </View>
        <View style={[commonStyle.center, styles.buyDate]}>
          <Text>{item.buyDate}</Text>
        </View>
      </View>
    )
  }

  render() {
    return <FlatList data={testData} renderItem={this.renderItems} />
  }
}

const styles = StyleSheet.create({
  wrapperItem: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5
  },
  stockItemName: {
    width: '30%',
    height: 35
  },
  buyPrice: { alignItems: 'center', width: '35%', height: 35 },
  buyDate: { alignItems: 'center', width: '35%', height: 35 }
})

export default InvestItems
