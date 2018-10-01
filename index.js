import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-360';

import Satellite from './Satellite/Satellite'
import UFO from './UFO/UFO'
import Astronaut from './Astronaut/Astronaut'

export default class VRLessonPlan101 extends React.Component {
  render() {
    return (
      <View>
        <Satellite />
        <UFO />
        <Astronaut />
      </View>
    );
  }
};

AppRegistry.registerComponent('VRLessonPlan101', () => VRLessonPlan101);