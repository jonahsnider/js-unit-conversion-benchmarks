import {mean, stddev} from '@jonahsnider/util';
import * as libraries from './libraries/index.js';

function testLibraries() {
	const results: Record<string, Record<string, string | number | bigint>> = {};

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
	const outputValues = Object.values(outputs) as string[] | number[] | bigint[];
	const outputType = typeof outputValues[0] as 'string' | 'number' | 'bigint';

	console.log(`${benchmark}:`);
	console.table(outputs);

	switch (outputType) {
		case 'string':
			const unique = new Set(outputValues as string[]);

			if (unique.size !== 1) {
				// Comparing strings can be difficult and string distance algorithms aren't useful enough for tiny differences, so success is not set to failure
				console.warn('[!] strings not equal', [...unique]);
			}

			break;
		case 'bigint':
		case 'number': {
			const normalizedOutputValues = (outputValues as number[] | bigint[]).map(value => Number(value));
			const outputStddev = stddev(normalizedOutputValues);

			// One standard deviation away
			if (Math.abs(outputStddev) > Math.abs(mean(normalizedOutputValues))) {
				success = false;
				console.warn('[!] standard deviation exceeded safe threshold', outputStddev);
			}

			break;
		}
		default: {
			console.warn('[!] unknown output type', outputType);

			break;
		}
	}

	console.log();
}

if (!success) {
	process.exit(1);
}
