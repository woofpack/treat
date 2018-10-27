import React from 'react';
import { View, Text, Image } from 'react-native';
import GestureRecognizer, {
  swipeDirections
} from 'react-native-swipe-gestures';
import { NavigationActions } from 'react-navigation';
import { Camera } from 'expo';

import styles from '../styles';

export default class Main extends React.Component {
  state = { gestureName: 'none' };

  onSwipeLeft(gestureState) {
    const { navigate } = this.props.navigation;
    navigate('Spot');
  }

  onSwipeRight(gestureState) {
    console.log('SwipeRight');
  }

  render() {
    const config = { velocityThreshold: 0.01, directionalOffsetThreshold: 20 };

    return (
      <GestureRecognizer
        style={styles.gesture}
        onSwipeLeft={state => this.onSwipeLeft(state)}
        onSwipeRight={state => this.onSwipeRight(state)}
        config={config}
      >
        <Camera style={styles.camera} type={'back'}>
          <View style={styles.overlay}>
            <Image source={require('../assets/swipe.gif')} />>
          </View>
        </Camera>
      </GestureRecognizer>
    );
  }
}
