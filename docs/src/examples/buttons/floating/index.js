import React from 'react';
import FloatingButtonExamples from './FloatingButtonExamples';
import FloatingButtonExamplesRaw from '!!raw!./FloatingButtonExamples';

import SpeedDialExample from './SpeedDialExample';
import SpeedDialExampleRaw from '!!raw!./SpeedDialExample';

import './_style.scss';

export default [{
  title: 'Simple Examples',
  code: FloatingButtonExamplesRaw,
  children: <FloatingButtonExamples />,
}, {
  title: 'Speed Dial Transition',
  code: SpeedDialExampleRaw,
  children: <SpeedDialExample />,
}];
