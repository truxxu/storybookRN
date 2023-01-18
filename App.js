import React from 'react';
import {Text, View} from 'react-native';

import {IS_STORYBOOK} from '@env';
import StorybookUI from './storybook';

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

module.exports = IS_STORYBOOK ? StorybookUI : App;
