import {
  create
} from '@storybook/theming/create';
import {
  addons
} from '@storybook/addons';

addons.setConfig({
  theme: create({
    brandTitle: 'Storybook',
    colorPrimary: '#003569',
    colorSecondary: '#004C98'
  })
})