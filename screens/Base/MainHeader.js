import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Container,
  Title,
  Header,
  Left,
  Button,
  Icon,
  Right,
  Body
} from 'native-base'

class MainHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>HomeScreen</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default MainHeader
