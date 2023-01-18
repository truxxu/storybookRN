import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';

const Text = ({label}) => {
  return <RNText style={styles.text}>{label}</RNText>;
};

export {Text};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});
