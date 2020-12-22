# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

| Library                                                                | Average execution time (lower is better) |
| ---------------------------------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                                                     | 230ns (`0.00023087892999971223`ms)       |
| [convert](https://npmjs.com/package/convert)                           | 430ns (`0.00043049598999984206`ms)       |
| [uom](https://npmjs.com/package/uom)                                   | 631ns (`0.0006319622100007875`ms)        |
| [tinu](https://npmjs.com/package/tinu)                                 | 981ns (`0.0009811507500003167`ms)        |
| [units-converter](https://npmjs.com/package/units-converter)           | 1µs 280ns (`0.0012804027499977524`ms)    |
| [safe-units](https://npmjs.com/package/safe-units)                     | 1µs 284ns (`0.0012844073100002106`ms)    |
| [convert-units](https://npmjs.com/package/convert-units)               | 1µs 451ns (`0.0014510506299994022`ms)    |
| [js-quantities](https://npmjs.com/package/js-quantities)               | 4µs 702ns (`0.004702985390006633`ms)     |
| [@favware/converter](https://npmjs.com/package/%40favware%2Fconverter) | 40µs 517ns (`0.040517597249999295`ms)    |

Generated automatically at Tue, 22 Dec 2020 20:47:20 GMT with Node.js v14.15.1 (V8 v8.4.371.19-node.17) on fv-az59-708 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

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
