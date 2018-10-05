import React from 'react'
import { ImageBackground, Text, Dimensions } from 'react-native'

const imageWidth = Dimensions.get('window').width / 3


const styles = {
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
}

const imageURL = require('../../assets/border-logo.png')

const Logo = () => (
  <ImageBackground source={imageURL} style={styles.image}>
    <Text> logo </Text>
  </ImageBackground>
  // <Text> logo </Text>
)

export default Logo
