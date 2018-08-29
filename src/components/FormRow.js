import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const FormRow = props => {
	const { children } = props;
	return (
		<View style={styles.container}>
			{ children }
		</View>
	)
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 5,
    marginBottom: 5,
    elevation: 1

  }
});


export default FormRow;