# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 17 Sep 2026 10:14:24 GMT with Node.js v26.9.0 (V8 v14.6.202.34-node.32) on runnervmlun5p (Linux-x64 AMD EPYC 9V74 80-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (222%)        | `140`ns (280%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (460%)        | `240`ns (480%)                 | `4,347,826`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `371`ns (742%)        | `380`ns (760%)                 | `2,695,418`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `510`ns (1,020%)      | `511`ns (1,022%)               | `1,960,784`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `570`ns (1,140%)      | `591`ns (1,182%)               | `1,754,386`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,082`ns (2,164%)    | `1,152`ns (2,304%)             | `924,214`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,802`ns (3,604%)    | `1,833`ns (3,666%)             | `554,939`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (100%)        | `370`ns (109%)                 | `2,941,176`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,152`ns (339%)      | `1,242`ns (365%)               | `868,056`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `19,631`ns (5,774%)   | `19,983`ns (5,877%)            | `50,940`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (171%)        | `121`ns (173%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (214%)        | `160`ns (229%)                 | `6,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (214%)        | `151`ns (216%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (330%)        | `241`ns (344%)                 | `4,329,004`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `521`ns (744%)        | `530`ns (757%)                 | `1,919,386`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,982`ns (2,831%)    | `2,023`ns (2,890%)             | `504,541`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (300%)        | `150`ns (300%)                 | `6,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `161`ns (322%)        | `170`ns (340%)                 | `6,211,180`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (962%)        | `551`ns (1,102%)               | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,242`ns (2,484%)    | `1,243`ns (2,486%)             | `805,153`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,825`ns (5,650%)    | `2,875`ns (5,750%)             | `353,982`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `181`ns (100%)        | `190`ns (105%)                 | `5,524,862`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `220`ns (122%)        | `221`ns (122%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `270`ns (149%)        | `271`ns (150%)                 | `3,703,704`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
