import AsyncStorage from '@react-native-async-storage/async-storage';
import { _getData } from './_DATA';

const STORAGE_KEY = 'mobileflashcards';

// get all decks
export const getDecks = async () => {
	try {
		const deckStorage = await AsyncStorage.getItem(STORAGE_KEY);
		if (deckStorage === null) {
			AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(_getData));
		}
		return deckStorage === null ? decks : JSON.parse(deckStorage);
	} catch (error) {
		console.log(error);
	}
};
export function getInitialData() {
	return Promise.all([_getData()]).then(([decks]) => ({
		decks,
	}));
}

// get individual deck id
export const getDeck = async (id) => {
	try {
		const deckStorage = await AsyncStorage.getItem(STORAGE_KEY);
		return JSON.parse(deckStorage)[id];
	} catch (error) {
		console.log(error);
	}
};
// add new deck

export function addDeck(name) {
	return AsyncStorage.mergeItem(
		STORAGE_KEY,
		JSON.stringify({
			[name]: {
				title: name,
				questions: [],
			},
		})
	);
}
// delete deck

export async function deleteDeck(key) {
	const results = await AsyncStorage.getItem(STORAGE_KEY);
	const data = JSON.parse(results);
	data[key] = undefined;
	delete data[key];
	AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// add card to deck
// export async function addCard(name, question, answer) {
// 	try {
// 		const card = await getDeck(name);
// 		await AsyncStorage.mergeItem(
// 			STORAGE_KEY,
// 			JSON.stringify({
// 				[title]: {
// 					questions: [...card.questions].concat(question, answer),
// 				},
// 			})
// 		);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
export async function addCard(title, question) {
	const results = await AsyncStorage.getItem(STORAGE_KEY);
	const data = JSON.parse(results);
	Object.keys(data).map((t) => {
		if (t === title) {
			data[t].questions.concat(question);
		}
	});
	AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
