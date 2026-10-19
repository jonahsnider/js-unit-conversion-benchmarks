import {Test} from '@jonahsnider/benchmark';
import assert from 'node:assert/strict';

/** Validates every result after the framework has stopped its timer. */
export class ValidatedTest<T> extends Test<T> {
	#expected: T;

	constructor(implementation: () => T, expected: T) {
		super(implementation);
		this.#expected = expected;
	}

	override async run(): Promise<T> {
		const result = await super.run();

		if (typeof result === 'number' && typeof this.#expected === 'number') {
			// Libraries use slightly different conversion constants (within 0.001%).
			const tolerance = Math.abs(this.#expected) * 1e-5;
			if (!Number.isFinite(result) || Math.abs(result - this.#expected) > tolerance) {
				assert.fail(`expected approximately ${this.#expected}, got ${result}`);
			}
		} else {
			assert.strictEqual(result, this.#expected);
		}

		return result;
	}
}
