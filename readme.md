# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

| Library                                                      | Average execution time (lower is better) |
| ------------------------------------------------------------ | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert)                 | 519ns (`0.0005194584699996905`ms)        |
| [uom](https://npmjs.com/package/uom)                         | 834ns (`0.0008347184100003582`ms)        |
| [safe-units](https://npmjs.com/package/safe-units)           | 1µs 309ns (`0.0013099642399982611`ms)    |
| [units-converter](https://npmjs.com/package/units-converter) | 1µs 537ns (`0.001537086709999245`ms)     |
| [convert-units](https://npmjs.com/package/convert-units)     | 1µs 770ns (`0.001770312629997572`ms)     |
| [js-quantities](https://npmjs.com/package/js-quantities)     | 5µs 158ns (`0.005158420859999831`ms)     |

<!-- endblock(results) -->

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

## Benchmark strategy

Each library is tested in converting `1024` inches to feet.
This is done by writing a function that calculates the value using the library.
Each of these trials are repeated several times for each library.

An example of one benchmark for [convert](https://github.com/pizzafox/convert) is shown below:

```js
import {convert} from 'convert';

export const name = 'convert';

export default function test() {
	return convert(1024).from('inch').to('foot');
}
```
