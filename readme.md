# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 19 Oct 2026 16:47:14 GMT with Node.js v26.12.0 (V8 v14.6.202.34-node.39) on runnervm8k3b6 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (268%)        | `111`ns (271%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (293%)        | `121`ns (295%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (344%)        | `150`ns (366%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (512%)        | `211`ns (515%)                 | `4,761,905`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (856%)        | `361`ns (880%)                 | `2,849,003`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (1,124%)      | `461`ns (1,124%)               | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `511`ns (1,246%)      | `531`ns (1,295%)               | `1,956,947`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,012`ns (2,468%)    | `1,032`ns (2,517%)             | `988,142`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,823`ns (4,446%)    | `1,844`ns (4,498%)             | `548,546`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `661`ns (100%)        | `741`ns (112%)                 | `1,512,859`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,693`ns (256%)      | `1,833`ns (277%)               | `590,667`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,511`ns (3,708%)   | `25,903`ns (3,919%)            | `40,798`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (186%)        | `131`ns (187%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (201%)        | `151`ns (216%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (214%)        | `151`ns (216%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (300%)        | `221`ns (316%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (701%)        | `501`ns (716%)                 | `2,036,660`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,034`ns (2,906%)    | `2,075`ns (2,964%)             | `491,642`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (282%)        | `150`ns (300%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (962%)        | `491`ns (982%)                 | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,162`ns (2,324%)    | `1,172`ns (2,344%)             | `860,585`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,735`ns (5,470%)    | `2,785`ns (5,570%)             | `365,631`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `220`ns (100%)        | `221`ns (100%)                 | `4,545,455`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `241`ns (110%)        | `250`ns (114%)                 | `4,149,378`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `290`ns (132%)        | `301`ns (137%)                 | `3,448,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `110`ns (220%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
