import React from 'react';
import {
  asset,
  View,
} from 'react-360';
import Entity from 'Entity'

export default class SatelliteDish extends React.Component {
  render() {
    return (
      <View>
        <Entity
          style={{
            transform: [
              {translate: [0, -15, 0]},
              {scale: [0.3, 0.3, 0.3]},
              {rotateY: 180},
            ],
          }}
          source={{
            obj: asset('SatelliteDish/SatelliteDish.obj'),
            mtl: asset('SatelliteDish/SatelliteDish.mtl')
          }} />
      </View>
    );
  }
};