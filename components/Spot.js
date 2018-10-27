import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Camera } from 'expo';
import GestureRecognizer, {
  swipeDirections
} from 'react-native-swipe-gestures';
import fetchService from '../services/fetch';

import styles from '../styles';

export default class Picture extends React.Component {
  spot = async () => {
    try {
      const base64 = await this.takePicture();
      const response = await fetchService.spot(base64);
    } catch (e) {
      console.log(e);
    }
  };

  takePicture = async () => {
    const data = await this.camera.takePictureAsync({ base64: true });

    const base64 = `data:image/jpg;base64,${data.base64}`;
    return base64;
  };

  render() {
    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="back"
      >
        <TouchableOpacity style={styles.paw} onPress={this.spot}>
          <Image source={require('../assets/paw.png')} />
        </TouchableOpacity>
        /
      </Camera>
    );
  }
}
