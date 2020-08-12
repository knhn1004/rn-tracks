import React, { useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/authContext'

const StartScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext)

  useEffect(() => {
    tryLocalSignin()
  }, [])

  return null
}

export default StartScreen
