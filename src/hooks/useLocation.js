import { useState, useEffect } from 'react'
import { Accuracy, watchPositionAsync } from 'expo-location'
import { askAsync, LOCATION } from 'expo-permissions'

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null)

  useEffect(() => {
    let subscriber
    const startWatching = async () => {
      try {
        let { status } = await askAsync(LOCATION)
        if (status !== 'granted') {
          return setError('Permission to access location was denied')
        }
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 200,
            distanceInterval: 10,
          },
          callback // a prop(state, context) should be put into the dependencies
        )
      } catch (e) {
        console.log(e)
        setErr(e)
      }
    }

    if (shouldTrack) {
      startWatching()
    } else {
      if (subscriber) {
        subscriber.remove()
        subscriber = null
      }
    }

    return () => {
      if (subscriber) {
        subscriber.remove()
      }
    }
  }, [shouldTrack, callback])

  return [err]
}
