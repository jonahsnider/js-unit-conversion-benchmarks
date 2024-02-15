# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 15 Feb 2024 19:04:22 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1532-808 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `110`ns (100%)        | `131`ns (119%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (283%)        | `381`ns (346%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `470`ns (427%)        | `561`ns (510%)                 | `2,127,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (510%)        | `731`ns (665%)                 | `1,782,531`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,012`ns (920%)      | `1,222`ns (1,111%)             | `988,142`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,343`ns (1,221%)    | `1,773`ns (1,612%)             | `744,602`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,383`ns (1,257%)    | `1,803`ns (1,639%)             | `723,066`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,475`ns (2,250%)    | `2,925`ns (2,659%)             | `404,040`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,311`ns (3,919%)    | `5,531`ns (5,028%)             | `231,965`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `66,943`ns (60,857%)  | `70,975`ns (64,523%)           | `14,938`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `712`ns (100%)        | `1,122`ns (158%)               | `1,404,494`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,767`ns (4,602%)   | `47,999`ns (6,741%)            | `30,519`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `77,631`ns (10,903%)  | `143,487`ns (20,153%)          | `12,881`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `140`ns (116%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `270`ns (223%)        | `300`ns (248%)                 | `3,703,704`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (356%)        | `472`ns (390%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (398%)        | `530`ns (438%)                 | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,182`ns (977%)      | `1,282`ns (1,060%)             | `846,024`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,179`ns (3,454%)    | `4,439`ns (3,669%)             | `239,292`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,463`ns (28,482%)  | `36,543`ns (30,201%)           | `29,017`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `110`ns (100%)        | `121`ns (110%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (300%)        | `371`ns (337%)                 | `3,030,303`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (419%)        | `511`ns (465%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,242`ns (1,129%)    | `1,363`ns (1,239%)             | `805,153`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,553`ns (1,412%)    | `1,743`ns (1,585%)             | `643,915`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,143`ns (5,585%)    | `6,695`ns (6,086%)             | `162,787`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `74,431`ns (67,665%)  | `79,615`ns (72,377%)           | `13,435`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `461`ns (100%)        | `521`ns (113%)                 | `2,169,197`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `501`ns (109%)        | `541`ns (117%)                 | `1,996,008`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `561`ns (122%)        | `631`ns (137%)                 | `1,782,531`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `240`ns (109%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `441`ns (200%)        | `481`ns (219%)                 | `2,267,574`/sec       |

<!-- endblock(results) -->
