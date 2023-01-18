import React from 'react';

import {IS_STORYBOOK} from '@env';
import StorybookUI from './storybook';
import {Welcome} from './src/screens';

const App = () => {
  return <Welcome />;
};

module.exports = IS_STORYBOOK ? StorybookUI : App;
