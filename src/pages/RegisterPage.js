import React from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';

import FormRow from '../components/FormRow';

export default class RegisterPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: 'teste@teste.com',
			password: 'asdasd',
			isLoading: false,
		};
	}

	onChangeHandler(field, value) {
		this.setState({
			[field]: value
		});
	}

	componentDidMount() {
		
	}

	onClickToLogin() {
		this.props.navigation.navigate('Login');
	}

	tryLogin() {
		this.setState({ isLoading: true });
		const { email, password } = this.state;

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(user => {
				Alert.alert(
				  'Success',
				  "Congratulations, now you're a user, please fill your login and password",
				  [
				    {text: 'OK', onPress: () => this.onClickToLogin()},
				  ],
				  { cancelable: false }
				)
			})
			.catch(error => {
				Alert.alert(
				  'Error',
				  error.message,
				  [
				    {text: 'OK', onPress: () => console.log('OK Pressed')},
				  ],
				  { cancelable: false }
				)
			})
			.then(() => this.setState({ isLoading: false }))
	}

	renderButton() {
		if( this.state.isLoading)
			return <ActivityIndicator />
		return (
			<View>
				<Button buttonStyle={styles.login} containerViewStyle={{width: '100%', marginLeft: 0}} color="white" title="REGISTER" onPress={() => this.tryLogin()} />
			</View>
		);
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
				
				{ this.renderButton() }
				
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