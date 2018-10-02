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
              {translate: [0, -25, 75]},
              {scale: [7.5, 7.5, 7.5]},
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