import {Benchmark} from '@jonahsnider/benchmark';
import {Sort} from '@jonahsnider/util';
import {benchmarkTitleOrder, BenchmarkTitles, Library} from './config.js';
import * as suites from './suites/index.js';

export const benchmark = new Benchmark();

for (const suite of Object.values(suites)) {
	await benchmark.addSuite(suite, {threaded: true});
}

function sortResults<T>(results: Map<BenchmarkTitles, T>): Map<BenchmarkTitles, T> {
	return new Map<BenchmarkTitles, T>([...results.entries()].sort(Sort.ascending(([title]) => benchmarkTitleOrder[title])));
}

export async function runBenchmark() {
	const rawResults = await benchmark.runSuites(undefined, {sequential: true});

	const results = new Map<BenchmarkTitles, Map<Library, {median: number; percentile75: number}>>();

	for (const [_suiteName, suite] of rawResults.entries()) {
		const suiteName = _suiteName as BenchmarkTitles;
		results.set(suiteName, new Map());

		for (const [_testName, test] of suite.entries()) {
			const testName = _testName as Library;

			results.get(suiteName)!.set(testName, {median: test.percentile(50), percentile75: test.percentile(75)});
		}
	}

	return sortResults(results);
}
