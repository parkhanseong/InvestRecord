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
          {/* <Button transparent>
            <Icon name="arrow-back" />
          </Button> */}
        </Left>
        <Body>
          <Title>알파카 투자 일지</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
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
