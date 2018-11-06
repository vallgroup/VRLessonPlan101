import React from 'react';
import {
  View,
  Image,
  VrButton,
} from 'react-360';
import Entity from 'Entity'

export default class JetpackMode extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      jetpack: null
    }

    this.jetpackId = 'a19dX3Vgo3S'

    this.apiKey = 'AIzaSyAk-MveTraQz8nYMIcjleOgJ1bvHqu7-R8';
  }

  componentWillMount() {
    this.fetchJetpackPoly()
  }

  render() {
    return (
      <View style={{
        position: "absolute",
        transform: [
          {translate: [0.5, 1, -1]}
        ],
        layoutOrigin: [0.5, 0.5],
      }}>

      {this.state.jetpack
        && <Entity
          style={{
            width: 1,
            height: 1,
            color: "#fff",
            transform: [
              {scale: [0.03, 0.03, 0.03]},
            ],
          }}
          source={{
            obj: {uri: this.state.jetpack.formats[0].root.url},
            mtl: {uri: this.state.jetpack.formats[0].resources[0].url},
          }} />}

      </View>
    );
  }


  async fetchJetpackPoly() {
    const url = `https://poly.googleapis.com/v1/assets/${this.jetpackId}?`
      + `key=${this.apiKey}`;

    const resp = await fetch(url)
    const json = await resp.json()
    console.log(json)
    this.setState({
      jetpack: json,
    })
  }
};