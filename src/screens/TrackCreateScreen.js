import React, { useContext, useCallback } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/locationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import Spacer from '../components/Spacer'
import { FontAwesome } from '@expo/vector-icons'
// import '../_mockLocation'

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext)
  const callback = useCallback(
    location => {
      addLocation(location, recording)
    },
    [recording]
  )
  const [err] = useLocation(isFocused || recording, callback)

  return (
    <SafeAreaView>
      <Spacer>
        <Text h2>Create a Track</Text>
      </Spacer>
      <Map />
      {!!err && <Text>Please enable locaiton services</Text>}
      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="plus" color={tintColor} size={20} />
  ),
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)
