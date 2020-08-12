import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AndroidKeyboardSafeWrapper from '../components/AndroidKeyboardSafeWrapper'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/authContext'
import LoadingOverlay from '../components/LoadingOverlay'

const SigninScreen = () => {
  const { state, signin, clearErrorMsg } = useContext(AuthContext)

  return (
    <>
      <AndroidKeyboardSafeWrapper>
        <AuthForm
          headerText="Sign in to your account"
          errorMsg={state.errorMsg}
          onSubmit={signin}
          submitButtonText="Sign In"
          loading={state.loading}
        />
        <NavLink text="Don't have an account? Sign up here!" to="Signup" />
      </AndroidKeyboardSafeWrapper>
      {state.loading && <LoadingOverlay />}
      <NavigationEvents onWillFocus={clearErrorMsg} />
    </>
  )
}

SigninScreen.navigationOptions = {
  headerShown: false,
}

const styles = StyleSheet.create({})

export default SigninScreen
