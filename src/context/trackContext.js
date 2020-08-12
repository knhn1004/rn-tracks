import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return { ...state, tracks: action.payload }
    case 'async_start':
      return { ...state, loading: true }
    case 'async_finish':
      return { ...state, loading: false }
    default:
      return state
  }
}

const fetchTracks = dispatch => async () => {
  try {
    dispatch({ type: 'async_start' })
    const response = await trackerApi.get('/tracks')
    dispatch({ type: 'fetch_tracks', payload: response.data })
    dispatch({ type: 'async_finish' })
  } catch (e) {
    console.error(e)
    dispatch({ type: 'async_finish' })
  }
}

const createTrack = dispatch => async (name, locations) => {
  try {
    dispatch({ type: 'async_start' })
    await trackerApi.post('/tracks', { name, locations })
    dispatch({ type: 'async_finish' })
  } catch (e) {
    console.error(e)
    dispatch({ type: 'async_finish' })
  }
}

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  { loading: false, tracks: [] }
)
