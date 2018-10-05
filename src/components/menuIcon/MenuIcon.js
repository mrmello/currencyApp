import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  iconMenu: {
    fontSize: 40,
    color: '$darkBlue',
  },
})

const MenuIcon = () => (
  <TouchableOpacity underlayColor="white">
    <View>
      <Icon name="bars" size={styles.iconMenu.fontSize} color={styles.iconMenu.color} />
    </View>
  </TouchableOpacity>
)

export default MenuIcon
