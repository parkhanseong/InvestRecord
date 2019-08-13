import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { commonStyle } from '../../lib/styleUtils'

class AddStock extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 100,
          alignItems: 'center'
        }}>
        <Icon name="pluscircle" type="antdesign" size={45} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  circle: {
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default AddStock
