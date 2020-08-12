import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { AsyncStorage } from 'react-native'
import { navigate } from '../navigationRef'

const initialState = { token: null, errorMsg: '', loading: false }

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMsg: action.payload }
    case 'signin':
      return { ...state, errorMsg: '', token: action.payload }
    case 'signout':
      return { ...state, token: '' }
    case 'async_start':
      return { ...state, loading: true }
    case 'async_finish':
      return { ...state, loading: false }
    case 'clear_error':
      return { ...state, errorMsg: '' }
    default:
      return state
  }
}

const signup = dispatch => async ({ email, password }) => {
  try {
    dispatch({ type: 'async_start' })
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
    dispatch({ type: 'async_finish' })

    // navigate to main flow
  } catch (e) {
    dispatch({ type: 'add_error', payload: 'Something wrong with sign up' })
    dispatch({ type: 'async_finish' })
    console.log(e.message)
  }
}

const signin = dispatch => async ({ email, password }) => {
  try {
    dispatch({ type: 'async_start' })
    const response = await trackerApi.post('/signin', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
    dispatch({ type: 'async_finish' })
  } catch (e) {
    dispatch({
      type: 'add_error',
      payload: 'Oops! Something went wrong...',
    })
    dispatch({ type: 'async_finish' })
  }
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'signout' })
  navigate('loginFlow')
}

const clearErrorMsg = dispatch => () => {
  dispatch({ type: 'clear_error' })
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMsg, tryLocalSignin },
  initialState
)
