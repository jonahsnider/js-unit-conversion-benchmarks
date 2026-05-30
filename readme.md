# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 30 May 2026 13:39:18 GMT with Node.js v24.16.0 (V8 v13.6.233.17-node.49) on runnervm3jyl0 (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (222%)        | `121`ns (242%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (460%)        | `231`ns (462%)                 | `4,347,826`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `370`ns (740%)        | `380`ns (760%)                 | `2,702,703`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,042%)      | `551`ns (1,102%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `621`ns (1,242%)      | `631`ns (1,262%)               | `1,610,306`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,111`ns (2,222%)    | `1,152`ns (2,304%)             | `900,090`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,703`ns (3,406%)    | `1,742`ns (3,484%)             | `587,199`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (100%)        | `360`ns (106%)                 | `2,941,176`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,202`ns (354%)      | `1,292`ns (380%)               | `831,947`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `21,823`ns (6,419%)   | `22,447`ns (6,602%)            | `45,823`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (173%)        | `131`ns (187%)                 | `8,264,463`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `160`ns (229%)        | `161`ns (230%)                 | `6,250,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `160`ns (229%)        | `161`ns (230%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `240`ns (343%)        | `251`ns (359%)                 | `4,166,667`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `651`ns (930%)        | `661`ns (944%)                 | `1,536,098`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,973`ns (2,819%)    | `2,033`ns (2,904%)             | `506,842`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `140`ns (280%)                 | `7,142,857`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `160`ns (320%)        | `170`ns (340%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (1,062%)      | `621`ns (1,242%)               | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,572`ns (3,144%)    | `1,582`ns (3,164%)             | `636,132`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,755`ns (5,510%)    | `2,805`ns (5,610%)             | `362,976`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `180`ns (100%)        | `190`ns (106%)                 | `5,555,556`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `220`ns (122%)        | `230`ns (128%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `261`ns (145%)        | `271`ns (151%)                 | `3,831,418`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (180%)         | `100`ns (200%)                 | `11,111,111`/sec      |

<!-- endblock(results) -->
