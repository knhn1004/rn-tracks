import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/trackContext'
import Spacer from '../components/Spacer'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = ({ navigation }) => {
  const {
    state: { tracks },
  } = useContext(TrackContext)
  const _id = navigation.getParam('_id')

  const track = tracks.find(t => t._id === _id)
  const initalCoords = track.locations[0].coords

  return (
    <View>
      <Spacer>
        <Text h2>{track.name}</Text>
      </Spacer>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.005,
          latitudeDelta: 0.005,
          ...initalCoords,
        }}
      >
        <Polyline
          coordinates={track.locations.map(loc => loc.coords)}
	  strokeColor="blue"
          strokeWidth={5}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
})

export default TrackDetailScreen
