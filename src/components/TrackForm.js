import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/locationContext'
import { Context as TrackContext } from '../context/trackContext'
import useSaveTrack from '../hooks/useSaveTrack'
import LoadingOverlay from './LoadingOverlay'

const TrackForm = () => {
  const {
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording, locations },
  } = useContext(LocationContext)
  const {
    state: { loading },
  } = useContext(TrackContext)

  const [saveTrack] = useSaveTrack()

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Track Name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        <Button
          title={recording ? 'Stop' : 'Start Recording'}
          onPress={recording ? stopRecording : startRecording}
        />
      </Spacer>
      {!recording && locations.length > 0 && (
        <Spacer>
          <Button
            title="Save"
            buttonStyle={{ backgroundColor: 'green' }}
            onPress={saveTrack}
            loading={loading}
          />
        </Spacer>
      )}
      {loading && <LoadingOverlay />}
    </>
  )
}

export default TrackForm
