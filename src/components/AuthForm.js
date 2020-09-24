import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { Text, Button, Input } from 'react-native-elements';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Spacer>
      <Text h3 style={styles.headerText}>{ headerText }</Text>
      <Input
        label="Email"
        value={email}
        onChangeText={ email =>  setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
        inputStyle={styles.containerInput}
        labelStyle={styles.label}
        placeholder="Email"
      />
      <Input
        secureTextEntry
        label="Contraseña"
        value={password}
        onChangeText={ password => setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
        inputStyle={styles.containerInput}
        labelStyle={styles.label}
        placeholder="Password"
      />
      { errorMessage ? <Text style={styles.errorMessage}>{ errorMessage }</Text> : null}
      <Button title={submitButtonText} loading={loading} onPress={() => onSubmit({ email, password })}/>
    </Spacer>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
  headerText: {
    marginBottom: 20,
    color : '#ffffff'
  },
  containerInput: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#a5b1c2',
    borderRadius: 2,
    color: '#a5b1c2'
  },
  label: {
    color: "#ffffff"
  }
});

export default AuthForm;
