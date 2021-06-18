import {Benchmark} from '@jonahsnider/benchmark';
import {mean} from '@jonahsnider/util';
import * as libraries from './libraries/index.js';

export async function runBenchmark(trials: number, skip: number) {
	const results: Record<string, Record<string, number>> = {};

	for (const library of Object.values(libraries)) {
		for (const [name, test] of Object.entries(library.default)) {
			const benchmark = new Benchmark();

			benchmark.add(name, test);

			const benchmarkResults = await benchmark.exec(trials + skip);

			const benchmarkResult = benchmarkResults.get(name);

			if (!benchmarkResult) {
				throw new TypeError(`Expected ${name} to be in the benchmark results`);
			}

			results[name] ??= {};
			results[name][library.name] = mean(benchmarkResult.slice(skip));
		}
	}

	return results;
}
