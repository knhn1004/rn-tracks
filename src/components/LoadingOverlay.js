import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'

const LoadingOverlay = () => {
  return (
    <Spinner visible textContent="Loading ..." textStyle={{ color: '#fff' }} />
  )
}

export default LoadingOverlay
