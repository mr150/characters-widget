import {createStoreon} from 'storeon';

const charsInit = {
	info: {},
	results: [],
};

function charsList(store) {
  store.on('@init', () => ({
		chars: {...charsInit},
		filter: {page: 1}
	}));

  store.on('chars/load', async (state, params) => {
		store.dispatch('loading', true);

		try {
			const response = await fetch(
				'https://rickandmortyapi.com/api/character/?' + (
					params ? (new URLSearchParams(params).toString()) : ''
				)
			);

			const json = await response.json();
			store.dispatch('chars/update', json);
		} catch(e) {
			store.dispatch('errors/load', 'Something went wrong');
		} finally {
			store.dispatch('loading', false);
		}
	});

  store.on('chars/update', (state, data) => ({chars: {...charsInit, ...data}}));
  store.on('filter/set', (state, filter) => {
		store.dispatch('chars/load', filter);
		return {filter};
	});

  store.on('loading', (state, data) => ({isLoading: data}));
}

function errors(store) {
  store.on('@init', () => ({error: ''}));
  store.on('errors/load', (state, data) => ({error: data}));
}

export default createStoreon([
	charsList, errors
]);
