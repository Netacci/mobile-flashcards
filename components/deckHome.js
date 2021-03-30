import React from 'react';
import { StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import addDeck from './addDeck';

function deckHome({ navigation }) {
	return (
		<TouchableOpacity
			style={styles.deck}
			onPress={() => navigation.navigate('Deck')}
		>
			<Text style={styles.text}>Deck 1</Text>
			<Text style={[styles.text, { marginTop: 20, fontSize: 18 }]}>
				3 Cards
			</Text>
		</TouchableOpacity>
	);
}

const Tab = createBottomTabNavigator();

function deckHomeStack() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				labelStyle: {
					fontSize: 16,
					fontWeight: 'bold',

					marginBottom: 10,
				},
				activeTintColor: '#008d29',
				style: { backgroundColor: '#f7ebf6' },
			}}
		>
			<Tab.Screen name='Decks' component={deckHome} />

			<Tab.Screen style={styles.text} name='Add Deck' component={addDeck} />
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	deck: {
		backgroundColor: '#82dfa3',

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
	text: {
		color: '#ffffff',
		fontSize: 22,
		fontWeight: 'bold',
	},
});

const mapStateToProps = (state) => {
	console.log(state);
	return {
		decks: state.decks,
	};
};
export default connect(mapStateToProps)(deckHomeStack);
