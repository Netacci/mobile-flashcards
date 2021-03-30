import { getInitialData } from '../utils/api';

export const ADD_DECK = 'ADD-DECK';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_DECK = 'DELETE_DECK';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';

function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks,
	};
}

export function handleInitialData() {
	return async (dispatch) => {
		const { decks } = await getInitialData();
		dispatch(receiveDecks(decks));
	};
}
