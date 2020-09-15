import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const { state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName } = useContext(LocationContext);
  
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Nombre de la grabación"/>
      </Spacer>
      {recording
        ? <Button title="Detener" onPress={stopRecording} />
        : <Button title="Empezar a grabar" onPress={startRecording} />
      }
      {
        !recording && locations.length ? <Button title="Guardar" onPress={saveTrack} /> : null
      }
    </>
  )
}

export default TrackForm;