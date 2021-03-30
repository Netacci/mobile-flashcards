import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

export default function addDeck() {
	const [text, onChangeText] = useState(' ');
	console.log(onChangeText);
	return (
		<View>
			<Text style={styles.text}>What is the title of your new deck?</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
			/>
			<TouchableOpacity style={styles.btn}>
				<Text style={{ color: '#ffffff' }}>Create Deck</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		marginTop: 30,
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
