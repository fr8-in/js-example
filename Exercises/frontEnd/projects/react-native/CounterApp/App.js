/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

const App: () => Node = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.counter_div}>
        <Text style={styles.text}>{count}</Text>
        <View style={styles.btn_div}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCount(count + 1)}>
            <Text style={{fontSize: 65}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCount(count - 1)}>
            <Text style={{fontSize: 65}}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 60,
          }}
          onPress={() => setCount(0)}>
          <Text style={{fontSize: 30}}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e3fffe',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter_div: {
    width: '80%',
    height: '60%',
  },
  text: {
    fontSize: 120,
    textAlign: 'center',
    marginTop: 90,
  },
  btn_div: {
    flexDirection: 'row',
    marginTop: 80,
    justifyContent: 'space-around',
    height: 90,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    height: 80,
    width: 80,

    borderRadius: 20,
  },
});

export default App;
