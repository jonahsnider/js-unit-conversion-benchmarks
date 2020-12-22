# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

| Library         | Average execution time (lower is better) |
| --------------- | ---------------------------------------- |
| convert         | 2µs 445ns (`0.0024459999999999755`ms)    |
| uom             | 3µs 947ns (`0.00394760199999998`ms)      |
| units-converter | 5µs 695ns (`0.005695004000000008`ms)     |
| safe-units      | 6µs 104ns (`0.006104104000000074`ms)     |
| convert-units   | 6µs 948ns (`0.006948204999999973`ms)     |
| js-quantities   | 25µs 825ns (`0.025825322000000123`ms)    |

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
