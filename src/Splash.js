import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Image
} from "react-native";
import {
  COLOR_BACKGROUND,
  COLOR_FACEBOOK,
  COLOR_BACKGROUND_TEXT_INPUT
} from "./myColor";

var {width, height} = Dimensions.get('window')
export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoOpacity: new Animated.Value(0),
      titleTiming: new Animated.Value(height/2)
    };
  }

  async componentDidMount() {
    //add Animation Here
    Animated.sequence([
      //animations by sequence
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 2000
      }),
      Animated.timing(this.state.titleTiming, {
        toValue: 10,
        duration: 1000
      })
    ]).start(() => {
      //End of animation
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{ ...styles.logo, opacity: this.state.logoOpacity }}
          source={require("./image/search.png")}
        >
        </Animated.Image>
        <Animated.Text style={{...styles.title, marginTop: this.state.titleTiming}}>Beet Innovators</Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: COLOR_BACKGROUND
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2
  },
  titles: {
    width: 200,
    height: 40,
    textAlign: "center"
  }
});
