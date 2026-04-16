# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 16 Apr 2026 22:01:02 GMT with Node.js v24.14.1 (V8 v13.6.233.17-node.44) on runnervm35a4x (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (275%)        | `111`ns (278%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (350%)        | `140`ns (350%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (500%)        | `201`ns (503%)                 | `5,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `341`ns (853%)        | `350`ns (875%)                 | `2,932,551`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `531`ns (1,328%)      | `541`ns (1,353%)               | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `641`ns (1,602%)      | `651`ns (1,627%)               | `1,560,062`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,052`ns (2,630%)    | `1,062`ns (2,655%)             | `950,570`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,714`ns (4,285%)    | `1,743`ns (4,358%)             | `583,431`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `661`ns (100%)        | `721`ns (109%)                 | `1,512,859`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,753`ns (265%)      | `1,863`ns (282%)               | `570,451`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,871`ns (3,914%)   | `26,799`ns (4,054%)            | `38,653`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (185%)        | `120`ns (200%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (200%)        | `121`ns (202%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (202%)        | `130`ns (217%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `220`ns (367%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `632`ns (1,053%)      | `641`ns (1,068%)               | `1,582,278`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,903`ns (3,172%)    | `1,963`ns (3,272%)             | `525,486`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (353%)        | `150`ns (375%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (1,228%)      | `501`ns (1,253%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,523`ns (3,808%)    | `1,533`ns (3,833%)             | `656,599`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,725`ns (6,813%)    | `2,805`ns (7,013%)             | `366,972`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `221`ns (100%)        | `230`ns (104%)                 | `4,524,887`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `241`ns (109%)        | `250`ns (113%)                 | `4,149,378`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `300`ns (136%)        | `301`ns (136%)                 | `3,333,333`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `91`ns (182%)         | `100`ns (200%)                 | `10,989,011`/sec      |

<!-- endblock(results) -->
