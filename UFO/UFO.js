import React from 'react';
import {
  asset,
  View,
} from 'react-360';
import Entity from 'Entity'

export default class UFO extends React.Component {
  render() {
    return (
      <View>
        <Entity
          style={{
            transform: [
              {translate: [-4, -13, -12]},
            ],
          }}
          source={{
            obj: asset('UFO/UFO.obj'),
            mtl: asset('UFO/UFO.mtl')
          }} />
      </View>
    );
  }
};