# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 29 Nov 2025 01:29:43 GMT with Node.js v24.11.1 (V8 v13.6.233.10-node.28) on runnervmg1sw1 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (275%)        | `111`ns (278%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (325%)        | `131`ns (328%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (500%)        | `201`ns (503%)                 | `5,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (878%)        | `361`ns (903%)                 | `2,849,003`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `491`ns (1,228%)      | `501`ns (1,253%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `621`ns (1,553%)      | `622`ns (1,555%)               | `1,610,306`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,002`ns (2,505%)    | `1,012`ns (2,530%)             | `998,004`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,703`ns (4,258%)    | `1,724`ns (4,310%)             | `587,199`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `512`ns (100%)        | `572`ns (112%)                 | `1,953,125`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,693`ns (331%)      | `1,843`ns (360%)               | `590,667`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,439`ns (4,969%)   | `26,815`ns (5,237%)            | `39,310`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (328%)        | `140`ns (350%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (350%)        | `140`ns (350%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (375%)        | `151`ns (378%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (525%)        | `211`ns (528%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `631`ns (1,578%)      | `641`ns (1,602%)               | `1,584,786`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,903`ns (4,758%)    | `1,944`ns (4,860%)             | `525,486`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (303%)        | `130`ns (325%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (350%)        | `140`ns (350%)                 | `7,142,857`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (350%)        | `140`ns (350%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (1,228%)      | `511`ns (1,278%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,543`ns (3,858%)    | `1,553`ns (3,883%)             | `648,088`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,665`ns (6,663%)    | `2,745`ns (6,863%)             | `375,235`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `210`ns (100%)        | `211`ns (100%)                 | `4,761,905`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (110%)        | `240`ns (114%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `281`ns (134%)        | `291`ns (139%)                 | `3,558,719`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (184%)         | `100`ns (204%)                 | `11,111,111`/sec      |

<!-- endblock(results) -->
