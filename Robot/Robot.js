import React from 'react';
import {
  asset,
  View,
} from 'react-360';
import Entity from 'Entity'

export default class Robot extends React.Component {
  render() {
    return (
      <View>
        <Entity
          style={{
            transform: [
              {translate: [-9, -15, -25]},
              {scale: [10, 10, 10]},
              {rotateY: 0},
            ],
          }}
          source={{
            obj: asset('Robot/Robot.obj'),
            mtl: asset('Robot/Robot.mtl')
          }} />
      </View>
    );
  }
};