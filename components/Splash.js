import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Camera } from "expo";

import styles from "../styles";

export default class Main extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Camera style={styles.camera} type={"back"}>
        <View style={styles.overlay}>
          <Image source={require("../assets/logo_3.png")} style={styles.logo} />
          <TouchableOpacity onPress={() => navigate("Spot")}>
            <Image
              source={require("../assets/paw_white.png")}
              style={styles.swipe}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }
}
