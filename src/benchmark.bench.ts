import {bench, describe} from 'vitest';
import {suites} from './suites/index.ts';

for (const suite of suites) {
	describe(suite.name, () => {
		for (const [name, run] of suite.tests) {
			bench(name, () => {
				run();
			});
		}
	});
}
