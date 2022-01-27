import ucfirst from 'ucfirst';

const toOption = item => ({value: item, title: ucfirst(item)});

export const genders = [{value: '', title: 'Gender'}].concat([
	'female',
	'male',
	'genderless',
	'unknown',
].map(toOption));

//export const statuses = [
export const statuses = [{value: '', title: 'Status'}].concat([
	'alive',
	'dead',
	'unknown',
].map(toOption));
