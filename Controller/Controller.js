import React from 'react';
import {
  AppRegistry,
  View,
  Text,
} from 'react-360';

export default class VRLessonPlan101Controller extends React.Component {
  render() {
    return (
      <View style={{
      	width: 1,
      	height: 1,
      	transform: [
      		{translate: [0, 0, -2]}
      	],
      	backgroundColor: '#f4f4f4',
      }}>
        <Text style={{
	      	width: 1,
	      	height: 1,
	      	color: '#fff',
	      }}>Hello</Text>
      </View>
    );
  }
};

