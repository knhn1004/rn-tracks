import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import AccountScreen from './src/screens/AccountScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import { setNavigator } from './src/navigationRef'

import { Provider as AuthProvider } from './src/context/authContext'
import { Provider as LocationProvder } from './src/context/locationContext'
import { Provider as TrackProvider } from './src/context/trackContext'
import StartScreen from './src/screens/StartScreen'
import { FontAwesome } from '@expo/vector-icons'

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
})

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="th-list" color={tintColor} size={20} />
  ),
}

const switchNavigator = createSwitchNavigator(
  {
    start: StartScreen,
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen,
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow,
      TrackCreate: TrackCreateScreen,
      Acount: AccountScreen,
    }),
  },
  {
    initialRouteName: 'start',
  }
)

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <TrackProvider>
      <LocationProvder>
        <AuthProvider>
          <App
            ref={navigator => {
              setNavigator(navigator)
            }}
          />
        </AuthProvider>
      </LocationProvder>
    </TrackProvider>
  )
}
