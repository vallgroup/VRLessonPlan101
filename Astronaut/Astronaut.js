import React from 'react';
import {
  asset,
  StyleSheet,
  View,
} from 'react-360';
import Entity from 'Entity'

export default class Astronaut extends React.Component {
  render() {
    return (
      <View style={styles.scene}>
        <Entity
          style={styles.astronaut}
          source={{
            obj: asset('Astronaut/Astronaut.obj'),
            mtl: asset('Astronaut/Astronaut.mtl')
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
  astronaut: {
    transform: [
      {translate: [-5, -15, -15]},
      // {rotateY: -90},
    ],
  },
});