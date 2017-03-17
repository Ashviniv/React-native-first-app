import React, {Component} from 'react';
// import { View,Text, TouchableHighlight } from 'react-native';
import DatePicker  from 'react-native-datepicker';
import {Text, View, TextInput, Slider, ProgressBarAndroid, TouchableHighlight, TouchableOpacity } from 'react-native';
import UserProfile from './UserProfile';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: '2017-03-15',
      value: 0,
      progress: 0.1
    }
    this.logout = this.logout.bind(this)
  }
  
  render(){
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1}}>
          <TouchableHighlight>
            <Text style={{fontSize: 20, fontFamily: 'bold'}}>{this.props.title}</Text>
          </TouchableHighlight>
          <Text onPress={this.logout}> Logout</Text>
        </View>
        <UserProfile navigator={this.props.navigator}/>
      </View>

    );
  }

  logout(){
    this.props.navigator.push({name: 'Login'})
  }
  
}