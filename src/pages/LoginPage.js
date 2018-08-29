import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	onChangeHandler(field, value) {
		this.setState({
			[field]: value
		});
	}

	tryLogin() {
		console.log(this.state);
	}

	render() {
		return (
			<View style={styles.form}>
				<FormRow>
					<TextInput 
						underlineColorAndroid='transparent'
						style={styles.input} 
						placeholder="email@domain.com" 
						value={this.state.email}
						onChangeText={email => this.onChangeHandler('email', email)}
					></TextInput>
				</FormRow>

				<FormRow>
					<TextInput 
						underlineColorAndroid='transparent'
						placeholder="****" 
						secureTextEntry 
						value={this.state.password} 
						onChangeText={password => this.onChangeHandler('password', password)}
					></TextInput>
				</FormRow>
				<View>
					<Button buttonStyle={styles.login} containerViewStyle={{width: '100%', marginLeft: 0}} color="white" title="Login" onPress={() => this.tryLogin()} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,

  },
  form: {
  	padding: 10,
  	backgroundColor: "#EEE",
  	height: "100%"

  },
  containerLogin: {
  	backgroundColor: '#000000',
  	margin: 0,
  	padding: 0,
  },
  login: {
  	width: "100%",
  	marginTop: 5,
  	padding: 15,
  	backgroundColor: "rgba(92, 99,216, 1)",
  	borderColor: 'transparent',
  	borderRadius: 5,
  	borderWidth: 0,
  }
});