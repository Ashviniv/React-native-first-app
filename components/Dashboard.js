import React, {Component} from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <TouchableHighlight >
        <Text>Hello {this.props.title} !!</Text>
      </TouchableHighlight>

    );
  }
  
}