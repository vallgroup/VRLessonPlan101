import React from 'react';
import {
  asset,
  StyleSheet,
  View,
} from 'react-360';
import Entity from 'Entity'

export default class UFO extends React.Component {
  render() {
    return (
      <View style={styles.scene}>
        <Entity
          style={styles.ufo}
          source={{
            obj: asset('UFO/UFO.obj'),
            mtl: asset('UFO/UFO.mtl')
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
  ufo: {
    transform: [
      {translate: [-5, 20, 30]},
      // {rotateY: -90},
    ],
  },
});