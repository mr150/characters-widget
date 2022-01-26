import {createStoreon} from 'storeon';

function charsList(store) {
  store.on('@init', () => ({chars: {
		info: {},
		results: [],
	}}));

  store.on('chars/load', async (state, params) => {
		try {
			const response = await fetch('https://rickandmortyapi.com/api/character/');
			const json = await response.json();
			store.dispatch('chars/update', json);
		} catch(e) {
			store.dispatch('errors/load', 'Something went wrong');
		}
	});

  store.on('chars/update', (state, data) => ({chars: data}));
}

function errors(store) {
  store.on('@init', () => ({error: ''}));
  store.on('errors/load', (state, data) => ({error: data}));
}

export default createStoreon([
	charsList, errors
]);
