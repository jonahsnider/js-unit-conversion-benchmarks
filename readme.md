# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

| Library                                                      | Average execution time (lower is better) |
| ------------------------------------------------------------ | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert)                 | 520ns (`0.0005200980999997425`ms)        |
| [uom](https://npmjs.com/package/uom)                         | 680ns (`0.0006806923500006515`ms)        |
| [safe-units](https://npmjs.com/package/safe-units)           | 1µs 343ns (`0.0013437282099984787`ms)    |
| [units-converter](https://npmjs.com/package/units-converter) | 1µs 488ns (`0.001488853159999218`ms)     |
| [convert-units](https://npmjs.com/package/convert-units)     | 1µs 603ns (`0.0016032658799982065`ms)    |
| [js-quantities](https://npmjs.com/package/js-quantities)     | 4µs 855ns (`0.004855550659996264`ms)     |

<!-- endblock(results) -->

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

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
