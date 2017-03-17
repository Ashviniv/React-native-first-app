import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index.js';
import DatePicker  from 'react-native-datepicker';
import {Text, View, TextInput, Slider, ProgressBarAndroid, TouchableOpacity, StyleSheet, Button} from 'react-native';
import moment from 'moment';

class UserProfile extends Component {
	constructor(props){
    super(props);
    this.state = {
    	name: '',
    	dob: new Date().toISOString().slice(0,10),
    	age: 0,
    	profile_completed: 0
    }
    this.onSliderValueChange = this.onSliderValueChange.bind(this)
    this.onAddUser = this.onAddUser.bind(this)
  }
	
	render(){
		return(

			<View style={styles.container}>

			  <View style={{ paddingRight: 20, paddingLeft: 20}}>
			    <Text> User Profile: </Text>
	  
	        <ProgressBarAndroid 
	          progress={this.state.profile_completed} 
	          styleAttr="Horizontal" 
	          indeterminate={false}
	          color={'blue'}
	          {...this.props}
	         />
	         
				  <Text>{(this.state.profile_completed * 100) + '%'}</Text>
				  <Text>{'\n'}</Text>
			    <Text style={{fontSize: 20}}> User Details </Text>

			    <TextInput
			      placeholder="name"
			      style={{borderColor : 'green'}}
			      onChangeText={(name) => {this.setState({name})}}
			      value={this.state.name}
			      onSubmitEditing={this.onSliderValueChange}
			    />
			    <Text>{'\n'}</Text>

				  <Text> Date Of Birth: </Text>
	        <DatePicker
	          style={{width: 200}}
	          date={this.state.date}
	          mode="date"
	          format="YYYY-MM-DD"
	          confirmBtnText="Confirm"
	          maxDate={new Date().toISOString().slice(0,10)}
	          cancelBtnText="Cancel"
	          onDateChange={(date) => {this.setState({dob: date});}}
	        />
	        
	        <Text>{'\n'}</Text>
	        
	        <Text> Age: </Text>
	        <Slider 
	          minimumValue={0} 
	          maximumValue={100} 
	          step={1}
	          thumbTintColor={'blue'}
	          value={this.state.age}
	          style={{borderWidth: 20, justifyContent: 'center'}}
	          onValueChange={(age) => {this.setState({age})}} 
	          onSlidingComplete={this.onSliderValueChange}
	        />
				  <Text> {this.state.age}</Text>
	        <Text>{'\n'}</Text>
	        
				  
				  <Button
  				  onPress={this.onAddUser}
  				  title="Add"
  				  color="#6495ed"
  				  disabled={this.state.name ? false : true }

  				/>
		      </View>
	    </View>
	  );
	}	

	onAddUser(){
		this.props.addUser(this.state.name, this.state.dob, this.state.age, this.state.profile_completed)
		this.props.navigator.push({name: "List_users", users: this.state.users})
	}

	onSliderValueChange(age){
		let progress = this.state.name ? 0.5 : 0
		if(this.state.age > 0){
			if(progress > 0){
				this.setState({profile_completed: 1})
		  }
			else{
				this.setState({profile_completed: 0.5})
			}
		}
		else{
			this.setState({profile_completed: progress})
		}
	}

}

const styles = StyleSheet.create({
  container: {
  	flexDirection: 'column', 
  	paddingTop: 40, 
  	justifyContent: 'center'
  },
  
});

function mapStateToProps(state) {
  return {users: state.UserReducer};
}

export default connect(
  mapStateToProps,
  {
    addUser: actionCreators.addUser,
  }
)(UserProfile);