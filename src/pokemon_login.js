import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView
} from "react-native";


export default class pokemon_login extends Component {
  constructor(props) {
    super(props);
    bg = require("./image/bg.jpg");
    logo = require("./image/logo.png");
    google = require("./image/search.png");
    facebook = require("./image/facebook.png");
    instagram = require("./image/instagram.png");
  }

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
         <ImageBackground style={styles.container} source={bg}>
        <View style={{ flex: 1, width: null, height: null }}>
          <Image source={logo} style={styles.logo} />
          <View style={{ flex: 1 }}>
            <TextInput placeholder="Username" style={styles.text_input} />
            <TextInput placeholder="Password" style={styles.text_input} />
            <View style={styles.login_other}>
              <View style={styles.login_other_parent}>
                <Image style={styles.logo_login_other} source={google} />
                <Text>Gmail</Text>
              </View>

              <View style={styles.login_other_parent}>
                <Image style={styles.logo_login_other} source={facebook} />
                <Text>Facebook</Text>
              </View>

              <View style={styles.login_other_parent}>
                <Image style={styles.logo_login_other} source={instagram} />
                <Text>Instagram</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      </KeyboardAvoidingView>  
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#532313",
    padding: 10,
    margin: 5,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 280,
    height: 70,
    resizeMode: "stretch" // cover
  },
  text_input: {
    backgroundColor: "rgba(255,255,255,0.6)",
    margin: 5,
    padding: 5
  },
  login_other: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
    justifyContent: "space-between"
  },
  login_other_parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo_login_other: {
    width: 50,
    height: 50
  }
});
