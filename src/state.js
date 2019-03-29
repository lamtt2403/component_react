import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class State extends Component {

    constructor(props){
        super(props);
        this.state = {
            num : 0
        }
    }

    increaseNum = () => {
        this.setState({
            ...this.state,
            num: this.state.num + 1,
        })
    }
    render() {
        return (
        <View>
            <Text  style={{fontSize: 30}}onPress={this.increaseNum}>{this.state.num}</Text>
        </View>
        )
    }
}
