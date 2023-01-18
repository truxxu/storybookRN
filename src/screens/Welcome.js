import React from 'react';

import {ScreenTemplate, Button, Input, Text} from '../atoms';

const Welcome = () => {
  return (
    <ScreenTemplate>
      <Text label="Welcome" />
      <Input placeholder="Name" />
      <Input placeholder="Address" />
      <Input placeholder="City" />
      <Input placeholder="Phone" />
      <Button
        label="Send"
        action={() => console.log('pressed!')}
        disabled={false}
      />
    </ScreenTemplate>
  );
};

export {Welcome};
