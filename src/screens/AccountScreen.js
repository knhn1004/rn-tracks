import React, { useContext } from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/authContext'
import Spacer from '../components/Spacer'
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Spacer>
        <Text h2>Account Screen</Text>
      </Spacer>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="gear" size={20} color={tintColor} />
  ),
}

const styles = StyleSheet.create({})

export default AccountScreen
