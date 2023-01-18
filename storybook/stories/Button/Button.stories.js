import React from 'react';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../CenterView';
import {Button as BTest} from '../../../src/atoms';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('custom', () => (
    <BTest
      label={text('Button text', 'Hello Button')}
      action={action('pressed custom')}
      disabled={false}
    />
  ));
