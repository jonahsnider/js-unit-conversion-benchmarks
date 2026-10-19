import assert from 'node:assert/strict';
import {test} from 'node:test';
import {ValidatedTest} from './validation.ts';

test('validates every result after its timing has been recorded', async () => {
	let calls = 0;
	const benchmarkTest = new ValidatedTest(() => (++calls === 2 ? 'wrong' : 'expected'), 'expected');

	assert.equal(await benchmarkTest.run(), 'expected');
	await assert.rejects(benchmarkTest.run(), assert.AssertionError);
	assert.equal(benchmarkTest.histogram.count, 2);
	assert.equal(await benchmarkTest.run(), 'expected');
});

test('allows small differences in conversion constants', async () => {
	const benchmarkTest = new ValidatedTest(() => 152.56006298388405, 152.5593602368307);

	assert.equal(await benchmarkTest.run(), 152.56006298388405);
});

test('rejects incorrect and nonfinite numeric results', async () => {
	for (const result of [0, 1439, NaN, Infinity, -Infinity]) {
		await assert.rejects(new ValidatedTest(() => result, 1440).run(), assert.AssertionError);
	}
});

test('compares strings and bigints exactly', async () => {
	assert.equal(await new ValidatedTest(() => '8.192 KB', '8.192 KB').run(), '8.192 KB');
	assert.equal(await new ValidatedTest(() => 1440n, 1440n).run(), 1440n);
	await assert.rejects(new ValidatedTest(() => '8.2 KB', '8.192 KB').run(), assert.AssertionError);
	await assert.rejects(new ValidatedTest(() => 1441n, 1440n).run(), assert.AssertionError);
});
