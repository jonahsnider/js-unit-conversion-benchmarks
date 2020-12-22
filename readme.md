# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

TODO: have the CI fill this in

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
