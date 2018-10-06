import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Image, View } from 'react-native'

const imageURL = require('../../assets/border-logo.png')

const styles = EStyleSheet.create({
  logo: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Logo = () => (
  <View style={styles.logo}>
    <Image source={imageURL} />
  </View>
)

export default Logo
