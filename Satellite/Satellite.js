import React from 'react';
import {
  asset,
  View,
  Animated,
} from 'react-360';
import Entity from 'Entity'

export default class Satellite extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      rotation: new Animated.Value(0),
    }
  }

  componentDidMount() {
    this.props.orbit
      && this.orbit()
  }

  render() {
    const _position = this.props.position || [5, 20, -30]
    const _satName = this.props.satName || `Satellite`

    return (
      <Animated.View style={{
        transform: [
          {rotateY: this.state.rotation},

        ]
      }}>
      <Animated.View
        style={{
            transform: [
              {translate: _position},
              {rotateX: this.state.rotation.interpolate({
                inputRange: [0, 100],
                outputRange: ['0deg', '360deg'],
              })},

            ],
        }}>
        <Entity
          style={{
          }}
          source={{
            obj: asset(`${_satName}/${_satName}.obj`),
            mtl: asset(`${_satName}/${_satName}.mtl`)
          }} />
        </Animated.View>
      </Animated.View>
    );
  }

  orbit() {
    const degree = (this.state.rotation._value + (this.props.orbitSpeed * 0.025))

    Animated.timing(this.state.rotation,
      {
        toValue: degree,
        duration: 20,
      }
    ).start(this.orbit.bind(this))
  }
};