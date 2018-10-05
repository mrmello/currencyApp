import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Home from './screens/Home'
import BackgroundImage from './components/backgroundImage/BackgroundImage'
import MenuIcon from './components/menuIcon/MenuIcon'

EStyleSheet.build({
  $lightBlue: '#4F6D7A',
  $midBlue: '#4F6D7A',
  $darkBlue: '#2874BF',
})

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar translucent={false} />
        <View style={{ paddingTop: 30, paddingLeft: 20 }}>
          <MenuIcon />
          <Home />
        </View>
        <BackgroundImage />
      </View>
    )
  }
}
