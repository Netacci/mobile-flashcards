import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import deckStack from './components/deck';
import deckHomeStack from './components/deckHome';
import reducer from './reducers';
import { handleInitialData } from './actions/index';
import middleware from './middleware';

const HomeStack = createStackNavigator();
const store = createStore(reducer, middleware);

function App(props) {
	useEffect(() => {
		props.fetchAll();
	}, [props]);
	return (
		<Provider store={store}>
			<NavigationContainer>
				<HomeStack.Navigator>
					<HomeStack.Screen name='Decks' component={deckHomeStack} />

					<HomeStack.Screen
						name='Deck'
						component={deckStack}
						options={{ headerShown: false }}
					/>
				</HomeStack.Navigator>
			</NavigationContainer>
		</Provider>
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
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAll: () => dispatch(handleInitialData()),
	};
};

export default connect(null, mapDispatchToProps)(App);
