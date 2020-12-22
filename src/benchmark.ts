import {Benchmark} from '@pizzafox/benchmark';
import {ascending, mean} from '@pizzafox/util';
import prettyMilliseconds from 'pretty-ms';
import {skip, trials} from './config.js';
import * as libraries from './libraries/index.js';

const benchmark = new Benchmark();

const benchmarkLibraries = Object.values(libraries);
for (const library of benchmarkLibraries) {
	benchmark.add(library.name, library.default);
}

export async function runBenchmark() {
	const results = await benchmark.exec(trials + skip);

	const stats: Array<[name: string, average: {average: number; pretty: string}]> = [];

	for (const [name, times] of results) {
		const average = times.slice(skip).reduce(mean);

		stats.push([
			name,
			{
				pretty: prettyMilliseconds(average, {formatSubMilliseconds: true}),
				average
			}
		]);
	}

	stats.sort(([, {average: a}], [, {average: b}]) => ascending(a, b));

	return Object.fromEntries(stats);
}
