import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import deckHome from './components/deckHome';
import deckStack from './components/deck';
import addDeck from './components/addDeck';
import deckHomeStack from './components/deckHome';

// const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* <Tab.Navigator initialRouteName='Decks'>
				<Tab.Screen name='Decks' component={deckHomeStack} />

				<Tab.Screen name='Add Deck' component={addDeck} />
			</Tab.Navigator> */}
			<HomeStack.Navigator>
				<HomeStack.Screen name='Decks' component={deckHomeStack} />
				{/* name of Deck is going to change to a variable for any deck clicked, so customer header would be used */}
				<HomeStack.Screen name='Deck' component={deckStack} />
			</HomeStack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
