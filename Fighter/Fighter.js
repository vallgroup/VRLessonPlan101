import React from 'react';
import {
  asset,
  View,
} from 'react-360';
import Entity from 'Entity'

export default class Fighter extends React.Component {
  render() {
    return (
      <View>
        <Entity
          style={{
            transform: [
              {translate: [-50, -20, 0]},
              {scale: [5, 5, 5]},
              {rotateY: 0},
            ],
          }}
          source={{
            obj: asset('Fighter/Fighter.obj'),
            mtl: asset('Fighter/Fighter.mtl')
          }} />
      </View>
    );
  }
};