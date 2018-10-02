import React from 'react';
import {
  asset,
  View,
} from 'react-360';
import Entity from 'Entity'

export default class Astronaut extends React.Component {
  render() {
    return (
      <View>
        <Entity
          style={{
            transform: [
              {translate: [-5, -15, -25]},
            ],
          }}
          source={{
            obj: asset('Astronaut/Astronaut.obj'),
            mtl: asset('Astronaut/Astronaut.mtl')
          }} />
      </View>
    );
  }
};