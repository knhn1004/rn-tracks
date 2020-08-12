import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/authContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import AndroidKeyboardSafeWrapper from '../components/AndroidKeyboardSafeWrapper'
import LoadingOverlay from '../components/LoadingOverlay'

const SignupScreen = () => {
  const { state, signup, clearErrorMsg } = useContext(AuthContext)

  return (
    <>
      <AndroidKeyboardSafeWrapper>
        <AuthForm
          errorMsg={state.errorMsg}
          headerText="Sign up for Tracks"
          onSubmit={signup}
          submitButtonText="Sign Up"
        />
        <NavLink text="Already have an account? Sign in here!" to="Signin" />
      </AndroidKeyboardSafeWrapper>
      {state.loading && <LoadingOverlay />}
      <NavigationEvents onWillFocus={clearErrorMsg} />
    </>
  )
}

SignupScreen.navigationOptions = {
  headerShown: false,
}

export default SignupScreen

const styles = StyleSheet.create({})
