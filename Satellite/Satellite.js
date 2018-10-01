import React from 'react';
import {
  asset,
  StyleSheet,
  View,
} from 'react-360';
import Entity from 'Entity'

export default class Satellite extends React.Component {
  render() {
    return (
      <View style={styles.scene}>
        <Entity
          style={styles.satellite}
          source={{
            obj: asset('Satellite/Satellite.obj'),
            mtl: asset('Satellite/Satellite.mtl')
          }} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  scene: {
    transform: [
      {translate: [0, 0, 0]}
    ],
  },
  satellite: {
    transform: [
      {translate: [5, 20, -20]},
      // {rotateY: -90},
    ],
  },
});