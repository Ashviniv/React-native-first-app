import React, {Component} from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import UsersList from './UsersList';
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
          navigationBar={
               <Navigator.NavigationBar
                 routeMapper={{
                   LeftButton: (route, navigator, index, navState) =>
                    { 
                      return (
                        <Text 
                          style={{fontSize: 20, color: '#fff', paddingTop: 15}} 
                          onPress={() => {navigator.pop()}}>
                          Back
                        </Text>
                      ); 
                    },
                   RightButton: (route, navigator, index, navState) =>
                     { 
                        return (
                          <Text 
                            style={{color: '#FFF', paddingTop: 15}}>
                            Done
                          </Text>); 
                      },
                   Title: (route, navigator, index, navState) =>
                     { 
                        return (
                          <Text 
                            style={{fontSize: 20, color: '#FFF', paddingTop: 15}}>
                            {route.title}
                          </Text>
                        ); 
                      },
                 }}
                 style={{backgroundColor: '#1e2226'}}
               />
            }
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
      
      case 'List_users':
        return <UsersList navigator={navigator} users={store.getState().UserReducer}  />
    }
  }
}