import React from 'react';
import { View, Text, Button } from 'react-native';

export default function errorPage() {
	return (
		<View>
			<Text>Sorry, you cannot take a quiz because there are no cards.</Text>
			<Button>Click here to add card</Button>
		</View>
	);
}
