# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

| Library                                                                | Average execution time (lower is better) |
| ---------------------------------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                                                     | 229ns (`0.00022942358999971564`ms)       |
| [convert](https://npmjs.com/package/convert)                           | 480ns (`0.00048026548000000725`ms)       |
| [uom](https://npmjs.com/package/uom)                                   | 623ns (`0.0006236762000006423`ms)        |
| [tinu](https://npmjs.com/package/tinu)                                 | 962ns (`0.0009626441799997951`ms)        |
| [units-converter](https://npmjs.com/package/units-converter)           | 1µs 441ns (`0.0014414479799990238`ms)    |
| [safe-units](https://npmjs.com/package/safe-units)                     | 1µs 451ns (`0.0014514879599992435`ms)    |
| [convert-units](https://npmjs.com/package/convert-units)               | 1µs 519ns (`0.0015198243699984758`ms)    |
| [js-quantities](https://npmjs.com/package/js-quantities)               | 4µs 909ns (`0.0049096694999950065`ms)    |
| [@favware/converter](https://npmjs.com/package/%40favware%2Fconverter) | 40µs 919ns (`0.04091982315000571`ms)     |

Generated automatically at Tue, 22 Dec 2020 20:49:31 GMT with Node.js v14.15.1 (V8 v8.4.371.19-node.17) on fv-az184-39 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

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
import { convert } from "convert";

export const name = "convert";

export default function test() {
  return convert(1024).from("inch").to("foot");
}
```
