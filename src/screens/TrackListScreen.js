import React, { useContext } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/trackContext'
import LoadingOverlay from '../components/LoadingOverlay'

const TrackListScreen = ({ navigation }) => {
  const {
    fetchTracks,
    state: { loading, tracks },
  } = useContext(TrackContext)

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={tracks}
          keyExtractor={track => track._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', {
                  _id: item._id,
                })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
      <NavigationEvents onDidFocus={fetchTracks} />
      {loading && <LoadingOverlay />}
    </>
  )
}

TrackListScreen.navigationOptions = {
  title: 'My Tracks',
}

const styles = StyleSheet.create({})

export default TrackListScreen
