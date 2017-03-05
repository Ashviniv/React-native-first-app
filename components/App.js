import React, {Component} from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

export default class App extends Component {
  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this)
  }

  render(){
    return (
      <Navigator
        initialRoute={{name: 'Login'}}
        renderScene={this.renderScene}
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.HorizontalSwipeJumpFromRight}
      />
    );
  }
  
  renderScene(route, navigator){
    switch(route.name){
      
      case 'Login':
        return <LoginForm navigator={navigator} />
      
      case 'Dashboard':
        return <Dashboard navigator={navigator} title={route.title} />
    }
  }
}