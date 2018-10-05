import React from 'react'
import { Image } from 'react-native'

const styles = {
  image: {
    height: '100%',
    width: '100%',
  },
}

const imageURL = require('../../assets/background-left.png')

const BackgroundImage = () => (
  <Image source={imageURL} style={styles.image} />
)

export default BackgroundImage
