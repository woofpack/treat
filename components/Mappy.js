import React from 'react';
import { View, Text, Image, TouchableHighlight, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import openMap from 'react-native-open-maps';

import styles from '../styles';

export default class Mappy extends React.Component {
  searchMap = name => {
    openMap({ query: name });
  };

  searchWeb = url => {
    Linking.openURL(url);
  };

  render() {
    const { navigation } = this.props;
    const lat = parseFloat(navigation.getParam('lat'));
    const lng = parseFloat(navigation.getParam('lng'));
    const name = navigation.getParam('name');
    const photo = navigation.getParam('photo');
    const description = navigation.getParam('description');
    const shelterName = navigation.getParam('shelterName');
    const url = navigation.getParam('url');

    // const lat = 25.772506;
    // const lng = -80.349009;
    // const name = 'Doobie';
    // const photo =
    //   'https://cdn2-www.dogtime.com/assets/uploads/gallery/boxer-dogs-and-puppies/boxer-dogs-puppies-3.jpg';
    // const description =
    //   'Loyal, curious, and famously amusing, this almost-human toy dog is fearless out of all proportio…';
    // const shelterName = 'Peggy Adams Animal Rescue League';
    // const url =
    //   'https://cdn2-www.dogtime.com/assets/uploads/gallery/boxer-dogs-and-puppies/boxer-dogs-puppies-3.jpg';
    return (
      <View style={styles.mapContainer}>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker
            coordinate={{ latitude: lat, longitude: lng }}
            onPress={() => this.search(lat, lng)}
          />
        </MapView>
        <View style={styles.info}>
          <Image source={{ uri: photo }} style={styles.infoPic} />
          <View style={styles.infoContainer}>
            <Text style={styles.infoName}>{name}</Text>
            <Text style={styles.infoDescription} numberOfLines={3}>
              {description}
            </Text>
            <View style={styles.infoButtonContainer}>
              <TouchableHighlight onPress={() => this.searchMap(shelterName)}>
                <Text style={styles.infoButton}>Visit me</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.searchWeb(url)}>
                <Text style={styles.infoButton}>Learn more</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
