import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo";
import fetchService from "../services/fetch";
import geoServices from "../services/geo";

import styles from "../styles";

export default class Picture extends React.Component {
  state = {
    latitude: 25.772506,
    longitude: -80.349009,
    zip: 33172,
    loading: false
  };

  componentDidMount = async () => {
    const { latitude, longitude } = await this.getCoords();
    const zip = await this.getZip(latitude, longitude);
    this.setState(prev => ({ ...prev, zip }));
  };

  spot = async () => {
    try {
      const { navigate } = this.props.navigation;
      const { zip } = this.state;
      const { base64 } = await this.camera.takePictureAsync({ base64: true });
      const buffer = `data:image/jpg;base64,${base64}`;
      this.setState({ loading: true });
      const { lat, lng, info } = await fetchService.spot(buffer, zip);

      const { name, photo, description, shelterName, url } = info;
      navigate("Mappy", {
        lat,
        lng,
        name,
        photo,
        description,
        shelterName,
        url
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  getCoords = () =>
    new Promise((resolve, reject) => {
      const { getCurrentPosition } = navigator.geolocation;
      getCurrentPosition(({ coords }) => resolve(coords), err => reject(err));
    });

  getZip = (lat, lng) =>
    new Promise((resolve, reject) => {
      try {
        const zip = geoServices.getZip(lat, lng);
        resolve(zip);
      } catch (e) {
        reject(e);
      }
    });

  cam = () => (
    <TouchableOpacity style={styles.paw} onPress={this.spot}>
      <Image
        source={require("../assets/paw_white.png")}
        style={styles.pawImage}
      />
    </TouchableOpacity>
  );

  loader = () => (
    <View style={styles.overlay}>
      <View style={styles.loaderContainer}>
        <Image
          source={require("../assets/loading.gif")}
          style={styles.loader}
        />
        <Image
          source={require("../assets/logo_3.png")}
          style={styles.loaderLogo}
        />
      </View>
    </View>
  );

  render() {
    const { loading } = this.state;
    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="back"
      >
        {loading ? this.loader() : this.cam()}
      </Camera>
    );
  }
}
