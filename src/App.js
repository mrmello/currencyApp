import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import Home from './screens/Home'
import './Styles'
import Menu from './components/menu/Menu'

const styles = {
  image: {
    height: '100%',
    width: '100%',
    left: '80%',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 1.0,
  },
}

const imageURL = require('./assets/background.png')

export default class App extends Component {
  render() {
    return (
      <View>
        <Menu />
        <ImageBackground source={imageURL} style={styles.image}>
          <Home />
        </ImageBackground>
      </View>
    )
  }
}
