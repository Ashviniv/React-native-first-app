import React, {Component} from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default class App extends Component {
  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this)
  }

  render(){
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{name: 'Login'}}
          renderScene={this.renderScene}
          configureScene={(route, routeStack) =>
            Navigator.SceneConfigs.HorizontalSwipeJumpFromRight}
        />
      </Provider>
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