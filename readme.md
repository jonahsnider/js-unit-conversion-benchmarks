# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

| Library                                                      | Average execution time (lower is better) |
| ------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                           | 207ns (`0.00020767464999977482`ms)       |
| [convert](https://npmjs.com/package/convert)                 | 456ns (`0.00045698633000001407`ms)       |
| [uom](https://npmjs.com/package/uom)                         | 599ns (`0.0005994815000004293`ms)        |
| [safe-units](https://npmjs.com/package/safe-units)           | 1µs 155ns (`0.0011558267400013263`ms)    |
| [units-converter](https://npmjs.com/package/units-converter) | 1µs 261ns (`0.0012612724799993425`ms)    |
| [convert-units](https://npmjs.com/package/convert-units)     | 1µs 358ns (`0.0013582333599985587`ms)    |
| [js-quantities](https://npmjs.com/package/js-quantities)     | 4µs 339ns (`0.004339831850000023`ms)     |

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
