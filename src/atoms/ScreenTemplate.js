import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';

const ScreenTemplate = ({children, center}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, center && styles.center]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export {ScreenTemplate};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'lightgray',
  },
  container: {
    backgroundColor: 'lightgray',
    padding: 15,
    height: '100%',
    zIndex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
