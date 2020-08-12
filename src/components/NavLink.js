import React from 'react'
import { withNavigation } from 'react-navigation'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Spacer from './Spacer'

const NavLink = ({ navigation, text, to }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(to)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
})

export default withNavigation(NavLink)
