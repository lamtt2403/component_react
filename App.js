/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  /**
   * Hamf này thực hiện thiết lập state cho component
   * Sử dụng super(props) là để có thể sử dụng this.props trong phạm vi hàm contructor
   * @param {} props 
   */
  constructor(props){
    super(props)
    console.log("constructor called")
    this.state = {
      num: 0
    }
    
  }

  /**
   * Thực hiện một số tác vụ, hàm này chỉ thực hiện một lần duy nhất
   */
  componentWillMount(){
    console.log("componentWillMount called")
  }

  /**
   * Thực hiện 1 số tác vụ, hàm này chỉ thực hiện một lần duy nhất
   * Hàm này rất hưu dụng khi thực hiện với map
   * khi có node (id) trong DOM
   * Nói tóm lại, hàm này được gọi để thông báo component đã tồn tại trên DOM
   * từ đó các thao tác trên DOM sẽ thực hiện bình thường với component này 
   */
  componentDidMount(){
    console.log("componentDidMount called")
  }


  /**
   * Hàm này thực hiện duy nhất khi component unmont
   * Hàm này hữu dụng khi xóa các timer k còn được sử dụng
   */
  componentWillUnmount(){
    console.log("componentWillUnmount called")
  }

  
  /**
   * Hàm này thực hiện khi props thay đổi 
   * (1) sử dụng thay đổi trạng thái (state) của component phụ thuộc vào props
   * (2) sử dụng các kết quả, khởi tạo biến có tính chất async. Ví dụ : khởi tạo google map api
   * đây là quá trình async do vậy, bạn không thể biết khi nào khởi tạo xong, khi khởi tạo xong
   * có thể truyển xuống component thông qua props và từ đó khởi tạo các dịch vụ khác 
   * //# if(nextProps.mapLoaded){ //props.mapLoaded khởi tạo false
    //#     let googleMaps = this.props.googleMaps ||
    //#         (window.google && // eslint-disable-line no-extra-parens
    //#         window.google.maps) ||
    //#         this.googleMaps;
 
    //#     if (!googleMaps) {
    //#         console.error(// eslint-disable-line no-console
    //#          'Google map api was not found in the page.');
    //#         return;
    //#     }
    //#     this.googleMaps = googleMaps;
 
    //#     this.autocompleteService = new googleMaps.places.AutocompleteService();
    //#     this.geocoder = new googleMaps.Geocoder();
    //# } 
   * @param {*} nextProps 
   */
  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps called")
  }


  /**
   * Hàm này thực hiện khi props và state thay đổi
   * Hàm này sẽ trả về  kết quả true/false, bạn sẽ cần sử dụng đến hàm này để sử lý,
   * xem có cần updateComponent hay không
   * @param {*} nextProps 
   * @param {*} nextState 
   */
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate called")
  } 

  /**
   * Hàm này thực hiện dựa vào kết quả của hàm trên (shouldComponentUpdate)
   * Nếu hàm trên trả về false thì React sẽ không gọi hàm này
   * 
   * @param {*} nextProps 
   * @param {*} nextState 
   */
  componentWillUpdate(nextProps, nextState){
    console.log("componentWillUpdate called")
  }

  /**
   * Hàm này thực hiện sau khi component được render lại, từ kết quả của componentWillUpdate
   */
  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate called")

  }

  onClick = () => {
    console.log("Hi Lamtt")
    // alert('Hi Lamtt')
    this.setState({
      ...this.state,
      num: this.state.num + 1
    }, () => {
      console.log(`num callback : ${this.state.num}`)
    })
    console.log(`num NOT callback : ${this.state.num}`)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="Hi Lam" onPress={this.onClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
