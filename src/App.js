import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import Home from './screens/Home'
import './Styles'
import Menu from './components/menu/Menu'

const styles = {
  image: {
    height: '50%',
    width: '50%',
  },
}

const imageURL = require('./assets/background.png')

export default class App extends Component {
  render() {
    return (
      <View>
        <Menu />
        {/* <ImageBackground source={imageURL} style={styles.image}> */}
          <Home />
        {/* </ImageBackground> */}
      </View>
    )
  }
}
