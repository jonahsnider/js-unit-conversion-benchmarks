# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 29 Oct 2026 20:17:08 GMT with Node.js v26.13.0 (V8 v14.6.202.34-node.40) on runnervmnwato (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (317%)        | `131`ns (320%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (341%)        | `150`ns (366%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (488%)        | `210`ns (512%)                 | `5,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (856%)        | `361`ns (880%)                 | `2,849,003`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (1,149%)      | `481`ns (1,173%)               | `2,123,142`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `511`ns (1,246%)      | `531`ns (1,295%)               | `1,956,947`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,032`ns (2,517%)    | `1,062`ns (2,590%)             | `968,992`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,893`ns (4,617%)    | `1,924`ns (4,693%)             | `528,262`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `711`ns (100%)        | `791`ns (111%)                 | `1,406,470`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,753`ns (247%)      | `1,914`ns (269%)               | `570,451`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,991`ns (3,515%)   | `26,719`ns (3,758%)            | `40,014`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (187%)        | `140`ns (200%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (200%)        | `141`ns (201%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (214%)        | `160`ns (229%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (314%)        | `221`ns (316%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `500`ns (714%)        | `501`ns (716%)                 | `2,000,000`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,984`ns (2,834%)    | `2,014`ns (2,877%)             | `504,032`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (293%)        | `120`ns (293%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (341%)        | `141`ns (344%)                 | `7,142,857`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (341%)        | `150`ns (366%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,222%)      | `521`ns (1,271%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,152`ns (2,810%)    | `1,162`ns (2,834%)             | `868,056`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,765`ns (6,744%)    | `2,807`ns (6,846%)             | `361,664`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `230`ns (100%)        | `231`ns (100%)                 | `4,347,826`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `241`ns (105%)        | `251`ns (109%)                 | `4,149,378`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `301`ns (131%)        | `321`ns (140%)                 | `3,322,259`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
