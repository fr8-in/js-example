/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

import {useForm, useController} from 'react-hook-form';

const Input: () => Node = ({name, control, entry}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      style={styles.input}
      name={name}
      secureTextEntry={entry}
    />
  );
};

const App: () => Node = () => {
  const {control, handleSubmit} = useForm();

  const onSubmit = data => {
    if (data.Email === '' || data.Password === '') {
      Alert.alert('Must fill all field');
    } else {
      Alert.alert(JSON.stringify(data));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={{fontSize: 60, color: '#fff', textAlign: 'center'}}>
          Login
        </Text>
        <Text style={styles.paragraph}>Email</Text>
        <Input name="Email" control={control} entry={false} />
        <Text style={styles.paragraph}>Password</Text>
        <Input name="Password" control={control} entry={true} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={{fontSize: 25}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#060a40',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    height: 400,
    width: 350,
    borderRadius: 5,
  },
  paragraph: {
    fontSize: 25,
    color: '#f7f8fa',
    paddingTop: 40,
    paddingLeft: 35,
  },
  input: {
    height: 50,
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    width: '85%',
    backgroundColor: '#eee',
    borderRadius: 30,
    fontSize: 22,
    paddingLeft: 20,
    color: '#060a40',
  },
  button: {
    backgroundColor: '#fff',
    height: 50,
    width: 130,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
