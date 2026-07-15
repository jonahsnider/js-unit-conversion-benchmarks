import {mean, stddev} from '@jonahsnider/util';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {inspect} from 'node:util';
import type {BenchmarkOutput} from './config.ts';
import {suites} from './suites/index.ts';

for (const suite of suites) {
	test(suite.name, async t => {
		const outputValues: BenchmarkOutput[] = [];

		for (const [, run] of suite.tests) {
			outputValues.push(await run());
		}

		const firstOutput = outputValues[0];

		assert(firstOutput !== undefined, 'suite must contain at least one test');

		switch (typeof firstOutput) {
			case 'string': {
				const unique = new Set(outputValues as string[]);

				if (unique.size !== 1) {
					// Comparing strings can be difficult and string distance algorithms aren't useful enough for tiny differences, so this is only diagnostic output.
					t.diagnostic(`strings not equal: ${inspect(unique.values().toArray())}`);
				}

				break;
			}
			case 'bigint':
			case 'number': {
				const normalizedOutputValues = (outputValues as number[] | bigint[]).map(value => Number(value));
				const outputStddev = stddev(normalizedOutputValues);

				// One standard deviation away
				assert(Math.abs(outputStddev) <= Math.abs(mean(normalizedOutputValues)), `standard deviation exceeded safe threshold: ${outputStddev}`);

				break;
			}
			default: {
				assert.fail(`unknown output type: ${typeof firstOutput}`);
			}
		}
	});
}
