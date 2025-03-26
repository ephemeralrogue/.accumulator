/* eslint-disable no-console */
import pino from 'pino';

const options = {
	transport: {
		target: 'pino-pretty',
		options: {
			level: 'trace'
		}
	},
	formatters: {
		level: label => {
			return {
				level: label.toUpperCase()
			};
		}
	}
};

function initializeLogger(options) {
	try { 
		return pino(options);
	} catch(error) {
		console.log(error, 'Error initializing logger');
	}
}

const Log = initializeLogger(options);

export default function createChildLogger(service, meta) {
	return Log.child({
		service: service,
		transaction: meta
	});
}