# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 28 Feb 2026 09:37:56 GMT with Node.js v24.13.1 (V8 v13.6.233.17-node.40) on runnervmnay03 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (303%)        | `140`ns (350%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (375%)        | `151`ns (378%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (553%)        | `231`ns (578%)                 | `4,524,887`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `361`ns (903%)        | `371`ns (928%)                 | `2,770,083`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,303%)      | `531`ns (1,328%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `621`ns (1,553%)      | `631`ns (1,578%)               | `1,610,306`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,042`ns (2,605%)    | `1,053`ns (2,633%)             | `959,693`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,743`ns (4,358%)    | `1,773`ns (4,433%)             | `573,723`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `501`ns (100%)        | `581`ns (116%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,693`ns (338%)      | `1,864`ns (372%)               | `590,667`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,231`ns (5,036%)   | `26,383`ns (5,266%)            | `39,634`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (233%)        | `140`ns (233%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `160`ns (267%)        | `160`ns (267%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `220`ns (367%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `611`ns (1,018%)      | `621`ns (1,035%)               | `1,636,661`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,964`ns (3,273%)    | `2,004`ns (3,340%)             | `509,165`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (350%)        | `141`ns (353%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `480`ns (1,200%)      | `481`ns (1,203%)               | `2,083,333`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,513`ns (3,783%)    | `1,523`ns (3,808%)             | `660,939`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,645`ns (6,613%)    | `2,735`ns (6,838%)             | `378,072`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (115%)        | `231`ns (116%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `290`ns (145%)        | `291`ns (146%)                 | `3,448,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (180%)         | `91`ns (182%)                  | `11,111,111`/sec      |

<!-- endblock(results) -->
