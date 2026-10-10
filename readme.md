# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 10 Oct 2026 18:51:23 GMT with Node.js v26.11.1 (V8 v14.6.202.34-node.37) on runnervmmprz5 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (268%)        | `120`ns (293%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (293%)        | `121`ns (295%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (341%)        | `141`ns (344%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (490%)        | `211`ns (515%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `341`ns (832%)        | `351`ns (856%)                 | `2,932,551`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `470`ns (1,146%)      | `471`ns (1,149%)               | `2,127,660`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `511`ns (1,246%)      | `521`ns (1,271%)               | `1,956,947`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,002`ns (2,444%)    | `1,032`ns (2,517%)             | `998,004`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,853`ns (4,520%)    | `1,874`ns (4,571%)             | `539,665`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `711`ns (100%)        | `782`ns (110%)                 | `1,406,470`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,703`ns (240%)      | `1,873`ns (263%)               | `587,199`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,223`ns (3,407%)   | `25,599`ns (3,600%)            | `41,283`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (183%)        | `120`ns (200%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `141`ns (235%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (333%)        | `211`ns (352%)                 | `5,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `491`ns (818%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,004`ns (3,340%)    | `2,034`ns (3,390%)             | `499,002`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (293%)        | `121`ns (295%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (293%)        | `130`ns (317%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (341%)        | `150`ns (366%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `461`ns (1,124%)      | `501`ns (1,222%)               | `2,169,197`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,182`ns (2,883%)    | `1,192`ns (2,907%)             | `846,024`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,765`ns (6,744%)    | `2,807`ns (6,846%)             | `361,664`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (116%)        | `240`ns (120%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `281`ns (141%)        | `291`ns (146%)                 | `3,558,719`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
