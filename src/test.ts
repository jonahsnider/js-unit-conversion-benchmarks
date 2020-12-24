import {mean, stddev} from '@pizzafox/util';
import * as libraries from './libraries/index.js';

function testLibraries() {
	const results: Record<string, Record<string, number>> = {};

	for (const library of Object.values(libraries)) {
		for (const [name, test] of Object.entries(library.default)) {
			results[name] ??= {};
			results[name][library.name] = test();
		}
	}

	return results;
}

const benchmarkOutputs = testLibraries();

let success = true;
for (const [benchmark, outputs] of Object.entries(benchmarkOutputs)) {
	const normalizedOutputValues = Object.values(outputs).map(value => Number(value));
	const outputStddev = stddev(normalizedOutputValues);

	console.log(`${benchmark}:`);
	console.table(outputs);

	// One standard deviation away
	if (Math.abs(outputStddev) > Math.abs(normalizedOutputValues.reduce(mean))) {
		success = false;
		console.warn('[!] standard deviation exceeded safe threshold', outputStddev);
	}

	console.log();
}

if (!success) {
	process.exit(1);
}
