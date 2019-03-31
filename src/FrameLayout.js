import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {COLOR_BACKGROUND, COLOR_BACKGROUND_TEXT_INPUT} from './myColor'
export default class FrameLayout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topLeft}>Top-Left</Text>
        <Text style={styles.topRight}>Top-Right</Text>
        <Text style={styles.center}>Center</Text>
        <Text style={styles.bottomLeft}>Bottom-Left</Text>
        <Text style={styles.bottomRight}>Bottom-Right</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_BACKGROUND,
        marginTop: 8
    },
    topLeft: {
        position: 'absolute',
        left: 0,
        top: 0
    },
    topRight: {
        position: 'absolute',
        right: 0,
        top: 0
    },
    bottomLeft: {
        position: 'absolute',
        bottom: 0,
        left:  0
    },
    bottomRight: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }


})
