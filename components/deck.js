import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import addCard from './addCard';
import startQuiz from './startQuiz';
import startQuizStack from './startQuiz';

const deckIndStack = createStackNavigator();

export default function deckStack() {
	return (
		<deckIndStack.Navigator>
			{/* name should be deck 1 or whatever deck clicked on */}
			<deckIndStack.Screen name='Deck 1' component={deck} />

			<deckIndStack.Screen name='Add Card' component={addCard} />
			<deckIndStack.Screen
				name='Start Quiz'
				options={{ headerShown: false }}
				component={startQuizStack}
			/>
		</deckIndStack.Navigator>
	);
}
function deck({ navigation }) {
	return (
		<View style={styles.container}>
			{/* add number of cards */}
			<Text style={styles.text}>Number of cards</Text>
			<TouchableOpacity
				style={[styles.btn, { marginTop: 40 }]}
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
		backgroundColor: '#2fb960',
		padding: 18,
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 10,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',

		marginTop: 30,
	},
	text: {
		color: '#ffffff',
	},
});
