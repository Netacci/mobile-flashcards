import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import flippedAnswer from './flippedAnswer';

const quizStack = createStackNavigator();

export default function startQuizStack() {
	return (
		<quizStack.Navigator>
			{/* deck 1 has to be variable of deck clicked */}
			<quizStack.Screen name='Deck 1' component={startQuiz} />
			<quizStack.Screen
				options={{ headerShown: false }}
				name='Answer'
				component={flippedAnswer}
			/>
		</quizStack.Navigator>
	);
}

function startQuiz({ navigation }) {
	return (
		<View>
			<Text style={styles.text}>Has this quiz started?</Text>
			<Text
				onPress={() => navigation.navigate('Answer')}
				style={[styles.text, { fontSize: 18 }]}
			>
				View Answer
			</Text>
			<TouchableOpacity style={[styles.btn, { marginTop: 40 }]}>
				<Text style={styles.submitText}>Correct</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.btn, { marginTop: 40 }]}>
				<Text style={styles.submitText}>Incorrect</Text>
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
		fontSize: 35,
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
	submitText: {
		fontSize: 18,
		color: '#ffffff',
		fontWeight: 'bold',
	},
});
