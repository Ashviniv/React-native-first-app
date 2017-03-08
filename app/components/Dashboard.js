import React, {Component} from 'react';
import { View,Text, TouchableHighlight } from 'react-native';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this)
  }
  
  render(){
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableHighlight>
          <Text style={{fontSize: 20, fontFamily: 'bold'}}>{this.props.title}</Text>
        </TouchableHighlight>
        <Text onPress={this.logout}> Logout</Text>
      </View>
    );
  }

  logout(){
    this.props.navigator.pop()
  }
  
}