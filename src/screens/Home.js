import React from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import MenuIcon from '../components/menuIcon/MenuIcon'
import Logo from '../components/logo/Logo'

const styles = EStyleSheet.create({
  home: {
    paddingTop: '$appPaddingTop',
    paddingLeft: '$appPaddingLeft',
    paddingRight: '$appPaddingRight',
    paddingBottom: '$appPaddingBottom',
  },
})

const Home = () => (
  <View style={styles.home}>
    <MenuIcon />
    <Logo />
  </View>
)

export default Home
