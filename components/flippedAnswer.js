import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import startQuizStack from './startQuiz';

const answerStack = createStackNavigator();

export default function flippedAnswerStack() {
	return (
		<answerStack.Navigator>
			{/* change name */}
			<answerStack.Screen
				options={{ headerShown: false }}
				name='answer'
				component={answer}
			/>
			<answerStack.Screen
				options={{ headerShown: false }}
				name='Deck 1'
				component={startQuizStack}
			/>
		</answerStack.Navigator>
	);
}

function answer({ navigation }) {
	return (
		<View>
			<Text
				onPress={() => navigation.navigate('Deck 1')}
				style={[styles.text, { fontSize: 18 }]}
			>
				Go back to question
			</Text>
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
