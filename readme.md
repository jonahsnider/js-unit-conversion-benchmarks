# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 08 May 2025 19:22:14 GMT with Node.js v22.15.0 (V8 v12.4.254.21-node.24) on fv-az1391-529 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `110`ns (220%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (460%)        | `231`ns (462%)                 | `4,347,826`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `401`ns (802%)        | `401`ns (802%)                 | `2,493,766`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `431`ns (862%)        | `441`ns (882%)                 | `2,320,186`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `551`ns (1,102%)      | `561`ns (1,122%)               | `1,814,882`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,032`ns (2,064%)    | `1,052`ns (2,104%)             | `968,992`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,024`ns (4,048%)    | `2,055`ns (4,110%)             | `494,071`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `602`ns (100%)        | `681`ns (113%)                 | `1,661,130`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,162`ns (193%)      | `1,283`ns (213%)               | `860,585`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,743`ns (4,276%)   | `27,615`ns (4,587%)            | `38,846`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `61`ns (100%)         | `70`ns (115%)                  | `16,393,443`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (180%)        | `110`ns (180%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (230%)        | `141`ns (231%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (246%)        | `151`ns (248%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (362%)        | `240`ns (393%)                 | `4,524,887`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `441`ns (723%)        | `451`ns (739%)                 | `2,267,574`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,075`ns (3,402%)    | `2,095`ns (3,434%)             | `481,928`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (962%)        | `501`ns (1,002%)               | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,112`ns (2,224%)    | `1,122`ns (2,244%)             | `899,281`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,835`ns (5,670%)    | `2,857`ns (5,714%)             | `352,734`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `201`ns (100%)        | `210`ns (104%)                 | `4,975,124`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (114%)        | `231`ns (115%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (135%)        | `280`ns (139%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
