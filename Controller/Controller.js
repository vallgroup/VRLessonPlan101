import React from 'react';
import {
  View,
  Text,
  VrButton,
  VrHeadModel,
  NativeModules,
} from 'react-360';
import JetpackMode from './JetpackMode'

const Updater = NativeModules.MoveCameraModule;

export default class VRLessonPlan101Controller extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 5,
      newPosition: [0,0,0]
    }
  }

  render() {
    return (
      <View style={{
        position: "absolute",
      	transform: [
      		{translate: [0, -1, -2]}
      	],
        layoutOrigin: [0.5, 0.5],
      }}>
        <JetpackMode />
        <VrButton
          style={{

          }}
          onClick={this.moveForward.bind(this)}>
          <Text>GO!</Text>
        </VrButton>
      </View>
    );
  }

  moveForward(e, n) {
    n = n || this.state.step

    const currentPosition = this.state.newPosition;

    const rotation = VrHeadModel.rotation();
    const rx       = (0 === rotation[0])
                    ? Math.abs(rotation[0])
                    : rotation[0];
    const ry       = rotation[1];

    const z = (((Math.abs(ry)/180) * 2) - 1)
    const x = ry > 0 ? Math.abs(z) - 1 : (Math.abs(z) - 1) * -1
    const y = rx/90
    const pos = [
      currentPosition[0] + (+x * +n),
      currentPosition[1] + (+y * +n),
      currentPosition[2] + (+z * +n),
    ];

    Updater.move(pos)

    this.setState({
      newPosition: pos,
    })
  }
};