import React from 'react';
import { StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import deckStack from './deck';
import addDeck from './addDeck';

function deckHome({ navigation }) {
	return (
		<TouchableOpacity
			style={styles.deck}
			onPress={() => navigation.navigate('Deck')}
		>
			<Text>Deck 1</Text>
			<Text>3 Cards</Text>
		</TouchableOpacity>
	);
}
// const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function deckHomeStack() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Decks' component={deckHome} />

			<Tab.Screen name='Add Deck' component={addDeck} />
		</Tab.Navigator>
		// <HomeStack.Navigator>
		// 	<HomeStack.Screen name='Decks' component={deckHome} />
		// 	{/* name of Deck is going to change to a variable for any deck clicked, so customer header would be used */}
		// 	<HomeStack.Screen name='Deck' component={deckStack} />
		// </HomeStack.Navigator>
		// <HomeStack.Navigator>

		// <HomeStack.Screen name='Decks' component={deckHome} />
		/* name of Deck is going to change to a variable for any deck clicked, so customer header would be used */
		// <HomeStack.Screen name='Deck' component={deckStack} />
		// </HomeStack.Navigator>
	);
}

const styles = StyleSheet.create({
	deck: {
		backgroundColor: '#ffffff',
		borderRadius: Platform.OS === 'ios' ? 16 : 2,
		padding: 20,
		marginRight: 10,
		marginLeft: 10,
		marginTop: 17,
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.8,
		shadowColor: 'rgba(0,0,0,0.24)',
		shadowOffset: {
			width: 0,
			height: 3,
		},
	},
});
