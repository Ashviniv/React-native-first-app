import React, {Component} from 'React';
import { Text, ListView, View, TouchableHighlight, StyleSheet } from 'react-native';

export default class UsersList extends Component{
  constructor(props){
  	super(props);
  	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  	this.state = {users: ds.cloneWithRows(this.props.users)}
  	console.log("prosp", this.props.users)
    this.onPressBack = this.onPressBack.bind(this)
  }
  render(){
  	return(
  	  <View style={styles.container}>
	      <ListView
	          dataSource={this.state.users}
	          renderRow={(rowData) => <Text> {rowData.name}</Text>}
	       />
      </View>

  	)
  }
  onPressBack(){
  	this.props.navigator.push({name: 'Dashboard', title: "Dashboard"})
  }
}

const styles = StyleSheet.create({
  container: {
  	flexDirection: 'column', 
  	paddingTop: 40, 
  	justifyContent: 'center'
  },
  
});