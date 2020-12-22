# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

| Library                                                                | Average execution time (lower is better) |
| ---------------------------------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                                                     | 259ns (`0.00025944908999964644`ms)       |
| [convert](https://npmjs.com/package/convert)                           | 526ns (`0.0005265105799999041`ms)        |
| [uom](https://npmjs.com/package/uom)                                   | 799ns (`0.0007991889200003672`ms)        |
| [tinu](https://npmjs.com/package/tinu)                                 | 1µs 106ns (`0.0011065581800011781`ms)    |
| [safe-units](https://npmjs.com/package/safe-units)                     | 1µs 353ns (`0.0013538322399985012`ms)    |
| [units-converter](https://npmjs.com/package/units-converter)           | 1µs 449ns (`0.0014497522399989327`ms)    |
| [convert-units](https://npmjs.com/package/convert-units)               | 1µs 610ns (`0.0016105117599971765`ms)    |
| [js-quantities](https://npmjs.com/package/js-quantities)               | 5µs 219ns (`0.0052192814399989245`ms)    |
| [@favware/converter](https://npmjs.com/package/%40favware%2Fconverter) | 46µs 939ns (`0.04693950337999802`ms)     |

Generated automatically at Tue, 22 Dec 2020 21:08:26 GMT with Node.js v14.15.1 (V8 v8.4.371.19-node.17) on fv-az151-212 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.

<!-- endblock(results) -->

The mean of the execution times are displayed in the table above.

---

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

---

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
