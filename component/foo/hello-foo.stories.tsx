import * as React from 'react';
import {storiesOf} from '@storybook/react';

storiesOf('foo', module)
  .addParameters({
    docsify: {
      path: 'foo/README',
    },
  })
  .add('hello foo', () => <div>hello foo</div>);
