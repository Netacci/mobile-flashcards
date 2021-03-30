import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';

export default function addCard() {
	const [text, onChangeText] = useState(' ');
	const [textTwo, onChangeTextTwo] = useState(' ');
	console.log(onChangeText);
	return (
		<SafeAreaView>
			<TextInput
				style={[styles.input, { marginTop: 50 }]}
				onChangeText={onChangeText}
				value={text}
				placeholder='Enter Question'
			/>
			<TextInput
				style={styles.input}
				onChangeText={onChangeTextTwo}
				value={textTwo}
				placeholder='Enter Answer'
			/>
			<TouchableOpacity style={styles.btn}>
				<Text style={{ color: '#ffffff' }}>Submit</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		marginTop: 30,
		padding: 10,
	},
	text: {
		marginTop: 40,
		textAlign: 'center',
	},
	btn: {
		backgroundColor: '#2fb960',
		padding: 18,
		borderRadius: 10,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
		width: 300,
		marginLeft: 50,
	},
});
