import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

const Button = ({label, action, disabled}) => {
  return (
    <Pressable
      style={[styles.button, disabled && {backgroundColor: 'gray'}]}
      onPress={!disabled ? action : null}>
      <Text style={styles.textStyle}>{label}</Text>
    </Pressable>
  );
};

export {Button};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'orange',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
});
