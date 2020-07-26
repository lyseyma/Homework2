import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default () => {
  const [name, setName] = useState('Seyma');

  function info() {
    setName('Seyma');
  }

  useEffect(() => {
    alert('Updating');
  });
  return (
    <View style={styles.container}>
      <Text>My name {name}</Text>
      <View style={styles.topScreen}>
        <TouchableOpacity onPress={info}>
          <Text style={styles.button}>Update Name</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66ffd6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    backgroundColor: '#3169E2',
    textAlign: 'center',
    borderRadius: 25,
    paddingVertical: 12,
    elevation: 5,
    marginTop: 20,
  },
});
