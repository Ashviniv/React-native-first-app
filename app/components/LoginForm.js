import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, ListView, Image, Button, Alert } from 'react-native';

export default class LoginForm extends Component{
  constructor(props){
    super(props)
    this.state = {
    	email: '', 
    	password: '', 
      logo: require('./josh.png')
    }
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onLoginClicked = this.onLoginClicked.bind(this)
  }

  render(){
  	return(
  	  <View style={styles.container}>
        <Image source={this.state.logo} />
        <Text> {this.props.text} </Text>
        <TextInput placeholder="Enter an email" onChangeText={this.onChangeEmail} value={this.state.email} autoFocus/>
        <TextInput 
          placeholder="Enter password" 
          onChangeText ={this.onChangePassword} 
          value={this.state.password} 
          autoFocus
          secureTextEntry 
          enablesReturnKeyAutomatically 
        />
        <Text>{"\n"}</Text>
        <Button
				  onPress={this.onLoginClicked}
				  title="Login"
				  color="#6495ed"
				  accessibilityLabel="Learn more about this purple button"
				/>
      </View>

  	);
  }
  
  onChangeEmail(email){
    this.setState({email})
  }

  onChangePassword(password){
    this.setState({password})
  }

  onLoginClicked(){
    if(this.state.email === '' || this.state.password === ''){
      Alert.alert("email/password cannot be blank." , this.state.email, this.state.password)
    }
    else{
      if(this.state.email === 'ashvini@josh.com' || this.state.password === 'josh123'){
        this.props.navigator.push({name: 'Dashboard', title: "index 1"})
      } 
      else{
        Alert.alert("email/password is invalid.") 
      }   
    }
  }
 
}

const styles = StyleSheet.create({
  container: {
  	flex: 1, 
  	flexDirection: 'column', 
  	alignItems: 'stretch',
  	padding: 20, 
  	justifyContent: 'center'
  },

  logo: {
  	justifyContent: 'center',
  }
  ,
  textStyle: {
    fontSize: 20,
    padding: 10
  }
});