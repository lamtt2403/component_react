import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import {
  COLOR_BACKGROUND,
  COLOR_FACEBOOK,
  COLOR_BACKGROUND_TEXT_INPUT
} from "./myColor";
import { from } from "rxjs";

const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

export default class pokemon_login extends Component {
  constructor(props) {
    super(props);
    bg = require("./image/bg.jpg");
    logo = require("./image/logo.png");
    google = require("./image/search.png");
    facebook = require("./image/facebook.png");
    instagram = require("./image/instagram.png");
    this.state = {
      username: "",
      password: ""
    };
    console.log("Constructor called");
  }

  render() {
    const Divider = props => {
      return (
        <View {...props}>
          <View style={styles.line} />
          <Text style={styles.textOR}>OR</Text>
          <View style={styles.line} />
        </View>
      );
    };
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={{ flex: 1, width: null, height: null }}>
            <View style={styles.up}>
              <Ionicons name="ios-speedometer" size={50} color="white" />
              <Text style={styles.title}>Share for everyone images</Text>
            </View>
            <View style={styles.down}>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  textContentType="emailAddress"
                  placeholder="Enter your email"
                />
              </View>

              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                />
              </View>
              {/* Add login button */}
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonTitle}>Login</Text>
              </TouchableOpacity>
              <Divider style={styles.divider} />
              <FontAwesome.Button
                style={styles.facebookButton}
                name="facebook"
                backgroundColor={COLOR_FACEBOOK}
              >
                <Text style={styles.loginButtonTitle}>Login with Facebook</Text>
              </FontAwesome.Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

handleUserNameOnTextChange = text => {
  this.setState(
    {
      username: text
    },
    () => {
      console.log("[Username] :" + text);
    }
  );
};

handlePasswordOnTextChange = text => {
  this.setState(
    {
      password: text
    },
    () => {
      console.log("[Password] :" + text);
    }
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    padding: 10,
    margin: 5
  },
  up: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: COLOR_BACKGROUND,
    justifyContent: "center",
    alignItems: "center"
  },
  down: {
    flex: 7,
    flexDirection: "column",
    backgroundColor: COLOR_BACKGROUND,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 20,
    width: 400,
    textAlign: "center"
  },
  textInputContainer: {
    paddingHorizontal: 10,
    backgroundColor: COLOR_BACKGROUND_TEXT_INPUT,
    borderRadius: 6,
    marginTop: 10
  },
  textInput: {
    width: 280,
    height: 40
  },
  loginButton: {
    width: 300,
    height: 40,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(192,97,97)"
  },
  loginButtonTitle: {
    fontSize: 18,
    color: "white"
  },
  facebookButton: {
    width: 300,
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    backgroundColor: "black",
    height: 1,
    flex: 2
  },
  textOR: {
    color: "black",
    flex: 1,
    textAlign: "center"
  },
  divider: {
    flexDirection: "row",
    width: 280,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
