import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import Home from './screens/Home'
import './Styles'

const styles = {
  image: {
    height: '100%',
    width: '100%',
  },
}

const imageURL = require('./assets/background-left.png')

export default class App extends Component {
  render() {
    return (
      <View>
        <ImageBackground source={imageURL} style={styles.image}>
          <Home />
        </ImageBackground>
      </View>
    )
  }
}
