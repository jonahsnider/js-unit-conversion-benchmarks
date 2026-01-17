# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 17 Jan 2026 22:10:25 GMT with Node.js v24.12.0 (V8 v13.6.233.17-node.37) on runnervmmtnos (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (278%)        | `120`ns (300%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (328%)        | `140`ns (350%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (328%)        | `140`ns (350%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (503%)        | `210`ns (525%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (878%)        | `361`ns (903%)                 | `2,849,003`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `501`ns (1,253%)      | `511`ns (1,278%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `611`ns (1,528%)      | `621`ns (1,553%)               | `1,636,661`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,042`ns (2,605%)    | `1,052`ns (2,630%)             | `959,693`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,694`ns (4,235%)    | `1,723`ns (4,308%)             | `590,319`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `541`ns (100%)        | `611`ns (113%)                 | `1,848,429`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,563`ns (289%)      | `1,683`ns (311%)               | `639,795`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,823`ns (4,773%)   | `27,231`ns (5,033%)            | `38,725`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `61`ns (100%)         | `70`ns (115%)                  | `16,393,443`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (197%)        | `121`ns (198%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (230%)        | `141`ns (231%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (231%)        | `150`ns (246%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `181`ns (297%)        | `191`ns (313%)                 | `5,524,862`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `601`ns (985%)        | `611`ns (1,002%)               | `1,663,894`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,903`ns (3,120%)    | `1,953`ns (3,202%)             | `525,486`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `130`ns (325%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (350%)        | `150`ns (375%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (1,203%)      | `491`ns (1,228%)               | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,513`ns (3,783%)    | `1,523`ns (3,808%)             | `660,939`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,645`ns (6,613%)    | `2,735`ns (6,838%)             | `378,072`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (115%)        | `231`ns (116%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (136%)        | `280`ns (140%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (220%)         | `90`ns (220%)                  | `11,111,111`/sec      |

<!-- endblock(results) -->
