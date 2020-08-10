import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { Text, Button, Input } from 'react-native-elements';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Spacer>
      <Text h3>{ headerText }</Text>
      <Input
        label="Email"
        value={email}
        onChangeText={ email =>  setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Contraseña"
        value={password}
        onChangeText={ password => setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      { errorMessage ? <Text style={styles.errorMessage}>{ errorMessage }</Text> : null}
      <Button title={submitButtonText} onPress={() => onSubmit({ email, password })}/>
    </Spacer>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  }
});

export default AuthForm;
