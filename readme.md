# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 17 Aug 2026 10:07:21 GMT with Node.js v24.19.0 (V8 v13.6.233.17-node.51) on runnervmzvulz (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `111`ns (278%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (503%)        | `210`ns (525%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `360`ns (900%)        | `371`ns (928%)                 | `2,777,778`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,303%)      | `531`ns (1,328%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `631`ns (1,578%)      | `642`ns (1,605%)               | `1,584,786`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,072`ns (2,680%)    | `1,092`ns (2,730%)             | `932,836`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,793`ns (4,483%)    | `1,834`ns (4,585%)             | `557,724`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `622`ns (100%)        | `692`ns (111%)                 | `1,607,717`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,854`ns (298%)      | `2,044`ns (329%)               | `539,374`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,311`ns (4,069%)   | `26,479`ns (4,257%)            | `39,509`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `160`ns (267%)        | `170`ns (283%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `240`ns (400%)        | `250`ns (417%)                 | `4,166,667`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `631`ns (1,052%)      | `632`ns (1,053%)               | `1,584,786`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,994`ns (3,323%)    | `2,043`ns (3,405%)             | `501,505`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (328%)        | `140`ns (350%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `471`ns (1,178%)      | `491`ns (1,228%)               | `2,123,142`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,513`ns (3,783%)    | `1,523`ns (3,808%)             | `660,939`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,775`ns (6,938%)    | `2,815`ns (7,038%)             | `360,360`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `230`ns (100%)        | `231`ns (100%)                 | `4,347,826`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (100%)        | `240`ns (104%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `301`ns (131%)        | `310`ns (135%)                 | `3,322,259`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
