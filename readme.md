# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 09 Feb 2024 01:18:38 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1149-86 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `221`ns (199%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `200`ns (180%)        | `441`ns (397%)                 | `5,000,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `202`ns (182%)        | `502`ns (452%)                 | `4,950,495`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `332`ns (299%)        | `762`ns (686%)                 | `3,012,048`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `571`ns (514%)        | `1,263`ns (1,138%)             | `1,751,313`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `621`ns (559%)        | `1,574`ns (1,418%)             | `1,610,306`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `702`ns (632%)        | `1,644`ns (1,481%)             | `1,424,501`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,253`ns (1,129%)    | `3,005`ns (2,707%)             | `798,085`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,585`ns (2,329%)    | `5,431`ns (4,893%)             | `386,847`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,511`ns (4,064%)    | `9,919`ns (8,936%)             | `221,680`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `812`ns (100%)        | `932`ns (115%)                 | `1,231,527`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,919`ns (3,931%)   | `38,751`ns (4,772%)            | `31,329`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,743`ns (4,894%)   | `40,447`ns (4,981%)            | `25,162`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (191%)        | `451`ns (215%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `551`ns (262%)        | `611`ns (291%)                 | `1,814,882`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `621`ns (296%)        | `691`ns (329%)                 | `1,610,306`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,323`ns (630%)      | `1,423`ns (678%)               | `755,858`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,484`ns (707%)      | `1,614`ns (769%)               | `673,854`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,931`ns (2,348%)    | `5,203`ns (2,478%)             | `202,799`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `221`ns (111%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (181%)        | `431`ns (215%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (221%)        | `510`ns (255%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,253`ns (627%)      | `1,423`ns (712%)               | `798,085`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,583`ns (792%)      | `1,883`ns (941%)               | `631,712`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,711`ns (2,856%)    | `6,043`ns (3,022%)             | `175,101`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,223`ns (3,112%)    | `7,175`ns (3,588%)             | `160,694`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `552`ns (100%)        | `632`ns (114%)                 | `1,811,594`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `582`ns (105%)        | `651`ns (118%)                 | `1,718,213`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `652`ns (118%)        | `741`ns (134%)                 | `1,533,742`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `332`ns (111%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `502`ns (167%)        | `562`ns (187%)                 | `1,992,032`/sec       |

<!-- endblock(results) -->
