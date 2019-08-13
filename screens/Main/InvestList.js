import React from 'react'
import { StyleSheet, View } from 'react-native'
import { InvestItems } from '../../components/Main'
import { commonStyle } from '../../lib/styleUtils'
import { Text } from 'native-base'

const InvestList = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.category}>
        <View
          style={[
            {
              width: '30%'
            },
            commonStyle.center
          ]}>
          <Text>종목</Text>
        </View>
        <View
          style={[{ alignItems: 'center', width: '35%' }, commonStyle.center]}>
          <Text>매수가</Text>
        </View>
        <View style={[commonStyle.center, { width: '35%' }]}>
          <Text>매도일</Text>
        </View>
      </View>
      <InvestItems />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  category: {
    flexDirection: 'row',
    height: 30,
    borderColor: 'gray',
    borderWidth: 0.5
  },
  listItem: {
    flexDirection: 'row'
  }
})

export default InvestList
