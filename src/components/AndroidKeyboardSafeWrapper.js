import React from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native'

const AndroidKeyboardSafeWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
	<StatusBar barStyle="dark-content"/>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 150,
  },
})

export default AndroidKeyboardSafeWrapper
