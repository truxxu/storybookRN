import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Input = ({placeholder}) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export {Input};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    marginVertical: 15,
  },
});
