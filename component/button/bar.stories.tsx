import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';

storiesOf('button', module).add('bar', () => (
  <button onClick={() => linkTo('button', 'foo')()}>bar</button>
));
