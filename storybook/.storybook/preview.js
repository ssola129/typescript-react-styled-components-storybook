import {
  addDecorator
} from '@storybook/react';
import {
  withInfo
} from '@storybook/addon-info';

addDecorator(
  withInfo({
    styles: {

    },
    inline: true,
    source: false,
  })
);