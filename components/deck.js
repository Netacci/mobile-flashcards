import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import addCard from './addCard';
import startQuiz from './startQuiz';

const deckIndStack = createStackNavigator();

export default function deckStack() {
	return (
		<deckIndStack.Navigator>
			<deckIndStack.Screen name='Decksss' component={deck} />

			<deckIndStack.Screen name='Add Card' component={addCard} />
			<deckIndStack.Screen name='Start Quiz' component={startQuiz} />
		</deckIndStack.Navigator>
	);
}
function deck({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => navigation.navigate('Add Card')}
			>
				<Text style={styles.text}>Add Card</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => navigation.navigate('Start Quiz')}
			>
				<Text style={styles.text}>Start Quiz</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.btn, { backgroundColor: 'red' }]}>
				<Text style={styles.text}>Delete Deck</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#ffffff',
	},
	btn: {
		backgroundColor: 'blue',
		padding: 18,
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 2,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',

		marginTop: 15,
	},
	text: {
		color: '#ffffff',
	},
});
