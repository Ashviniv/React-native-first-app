import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, ListView, Image, Button, Alert } from 'react-native';
import * as actionCreators from '../actions/index.js';
import { connect } from 'react-redux';

class LoginForm extends Component{
  constructor(props){
    super(props)
    this.state = {
    	email: '', 
    	password: '', 
      logo: require('./josh.png'),
      disableLogin: true,
      errorMsg: '',
      loggedIn: false,
      error: {
        email: '',
        password: ''
      }
    }
    this.errorMsg = ''
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onLoginClicked = this.onLoginClicked.bind(this)
  }

  render(){
    
  	return(

    	  <View style={styles.container}>
          <View style={styles.logo}>
          <Image source={this.state.logo} />
          </View>
          <Text>{"\n"}</Text>
          <Text style={styles.error}> {this.props.errorMsg} </Text>
          <Text> {this.props.text} </Text>
          
          <TextInput placeholder="Enter an email" 
            onChangeText={this.onChangeEmail} 
            value={this.state.email} 
            autoFocus
          />
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
  				/>
        </View>

  	);
  }
  
  onChangeEmail(email){
    if(email === ''){
      this.errorMsg = "Email Cannot be blank";
    }
    else{
      let res = email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
      if(res == null){
        this.errorMsg = "Invalid Email format"
      }
      else{
        this.errorMsg = ''
      }
    }
    this.setState({error: {email: this.errorMsg}})
    this.setState({errorMsg: this.errorMsg})
    this.setState({email})
    
  }

  onChangePassword(password){
    if(password === ''){
      this.errorMsg = "Password Cannot be blank"
    }
    else{
      if(password.length < 8){
        this.errorMsg = "Password length must be greater than 8."
      }
      else{
        this.errorMsg = ''
      }
    }
    this.setState({error: {password: this.errorMsg}})
    this.setState({errorMsg: this.errorMsg})
    this.setState({password})
  }

  onLoginClicked(){
    this.props.handleSubmitForm(this.state.email, this.state.password, this.props.navigator)
  }
 
}

const styles = StyleSheet.create({
  container: {
  	flexDirection: 'column', 
  	padding: 20, 
  	justifyContent: 'center'
  },

  logo: {
    flex: 1,
  	alignItems: 'center',
  }
  ,
  textStyle: {
    fontSize: 20,
    padding: 10
  },
  error: {
    color: 'red'
  }
});

function mapStateToProps(state) {
  return state.LoginReducer;
}

export default connect(
  mapStateToProps,
  {
    handleSubmitForm: actionCreators.submitLoginForm,
    handleLoginSuccess: actionCreators.successfullLogin,
    handleLoginFailure: actionCreators.failedLogin,
    changeInput: actionCreators.changeInput
  }
)(LoginForm);