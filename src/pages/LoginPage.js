import React from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: 'teste@teste.com',
			password: '12',
			isLoading: false,
		};
	}

	onChangeHandler(field, value) {
		this.setState({
			[field]: value
		});
	}

	componentDidMount() {
		const config = {
			apiKey: "AIzaSyCI0KNoBJYXdtD-rtQrZikJt836SS6Wfnw",
			authDomain: "series-202af.firebaseapp.com",
			databaseURL: "https://series-202af.firebaseio.com",
			projectId: "series-202af",
			storageBucket: "series-202af.appspot.com",
			messagingSenderId: "734559578939"
		};
		  
		firebase.initializeApp(config);
	}

	tryLogin() {
		this.setState({ isLoading: true });
		const { email, password } = this.state;

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				console.log("Yeahh");
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
				console.log(error);
			})
			.then(() => this.setState({ isLoading: false }))
	}

	renderButton() {
		if( this.state.isLoading)
			return <ActivityIndicator />
		return (
			<View>
				<Button buttonStyle={styles.login} containerViewStyle={{width: '100%', marginLeft: 0}} color="white" title="Login" onPress={() => this.tryLogin()} />
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