import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-360';

import VRLessonPlan101Controller from './Controller/Controller'

import Satellite from './Satellite/Satellite'
import UFO from './UFO/UFO'
import Astronaut from './Astronaut/Astronaut'
import Robot from './Robot/Robot'
import SpaceBar from './SpaceBar/SpaceBar'
import Fighter from './Fighter/Fighter'

export default class VRLessonPlan101 extends React.Component {
  render() {
    return (
      <View>
        <Satellite
          satName={`Satellite`}
          position={[0, 20, -30]}
          orbit={true}
          orbitSpeed={3} />

        <Satellite
          satName={`Satellite2`}
          position={[-500, 500, 500]}
          orbit={true}
          orbitSpeed={1} />

        <Satellite
          satName={`Satellite3`}
          position={[200, 200, 0]}
          orbit={true}
          orbitSpeed={2} />

      {/* */}
        <UFO />
        <Astronaut />
        <Robot />
        <SpaceBar />
        <Fighter />
      </View>
    );
  }
};

AppRegistry.registerComponent('VRLessonPlan101', () => VRLessonPlan101);
AppRegistry.registerComponent('VRLessonPlan101Controller', () => VRLessonPlan101Controller);