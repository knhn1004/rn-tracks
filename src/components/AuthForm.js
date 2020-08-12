import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Spacer from './Spacer'
import { Text, Input, Button } from 'react-native-elements'

const AuthForm = ({
  errorMsg,
  headerText,
  onSubmit,
  submitButtonText,
  loading,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        placeholder="Email"
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Input
        placeholder="Password"
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {!!errorMsg.length && <Text style={styles.errorMsg}>{errorMsg}</Text>}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
          loading={loading}
        />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  errorMsg: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
})

export default AuthForm
