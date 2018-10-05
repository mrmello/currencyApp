import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { View, Text } from 'react-native'

const styles = EStyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '$darkBlue',
  },
})
const Menu = () => (
  <View style={styles.container}>
    <Text>aaa</Text>
  </View>
)

export default Menu
