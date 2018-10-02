import React from 'react';
import {
  asset,
  View,
} from 'react-360';
import Entity from 'Entity'

export default class SpaceBar extends React.Component {
  render() {
    return (
      <View>
        <Entity
          style={{
            transform: [
              {translate: [100, -15, 0]},
              {scale: [10, 10, 10]},
              {rotateY: 180},
            ],
          }}
          source={{
            obj: asset('SpaceBar/SpaceBar.obj'),
            mtl: asset('SpaceBar/SpaceBar.mtl')
          }} />
      </View>
    );
  }
};