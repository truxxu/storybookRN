import React from 'react';
import {action} from '@storybook/addon-actions';
import {text, boolean, color} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../CenterView';
import {Button as BTest} from '../../../src/atoms';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Button', () => (
    <BTest
      label={text('Label:', 'Send')}
      action={action('OnPress event')}
      disabled={boolean('Disabled:', false)}
      color={color('Color:', 'orange')}
    />
  ));
