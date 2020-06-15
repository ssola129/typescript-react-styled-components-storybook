import {
  addDecorator
} from '@storybook/react';
import {
  withInfo
} from '@storybook/addon-info';

addDecorator(
  withInfo({
    // styles: {
    //   header: {
    //     h1: {},
    //     body: {},
    //     h2: {}
    //   },
    //   infoBody: {}
    // },
    inline: true,
    source: false,
    propTables: false,
    header: false,
  })
);