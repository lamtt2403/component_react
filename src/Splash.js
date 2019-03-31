import React, { Component } from "react";
import { Text, View, StyleSheet, Animated, Dimensions, Image } from "react-native";
import {
  COLOR_BACKGROUND,
  COLOR_FACEBOOK,
  COLOR_BACKGROUND_TEXT_INPUT
} from "./myColor";

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
            style={styles.logo}
            source={require('./image/search.png')}/>
      </View>
    );
  }
}

const styles = Stye.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: COLOR_BACKGROUND
    },
    logo: {
        width: 130,
        height: 130,
        borderRadius: 130 /2
    }
})
