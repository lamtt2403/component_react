import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Greeting extends Component {
  render() {
    return (
      <View>
        <Text>Hi {this.props.name}</Text>
        <Wellcome name = "React Native"/>
      </View>
    )
  }
}


class Wellcome extends Component {
    render(){
        return(
            <View>
                <Text>Wellcome {this.props.name}</Text>
            </View>
        )
    }
}
