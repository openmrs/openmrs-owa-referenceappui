import { CONSTANTS } from '../redux/constants/opemMRSConstants';

export const getAppName = (label) => {
	const getNameArray = label.split('.');
	return getNameArray.filter((name) => !CONSTANTS.includes(name))[0];
};

export const splitCamelCase = (name) => (name.replace(/([a-z](?=[A-Z]))/g, '$1 '));

export const iconGetter = (icon) => {
	const heartBeat = 'heartbeat';
	return icon.split('-')[1] === 'vitals'
		?  heartBeat
		:  icon.split('-')[1];
};

export const descriptionModifier = (description) => (
	description && description.search( /[.]/g) === -1
		? description
		: 'An OpenMRS Application'
);

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};
