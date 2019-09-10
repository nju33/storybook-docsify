import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';

storiesOf('button', module).add('foo', () => (
  <button onClick={() => linkTo('button', 'bar')()}>foo</button>
));
