import React from 'react';
import { compose } from 'recompose';

import { withTheme } from '../hocs';

import { StyledText } from './StyledText';

const Text = ({ color, tag, as, ...rest }) => (
  <StyledText as={!as && tag ? tag : as} colorProp={color} {...rest} />
);

Text.defaultProps = {
  level: 1,
};

let TextDoc;
if (process.env.NODE_ENV !== 'production') {
  TextDoc = require('./doc').doc(Text); // eslint-disable-line global-require
}
const TextWrapper = compose(withTheme)(TextDoc || Text);

export { TextWrapper as Text };
