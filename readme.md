# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 04 Jan 2024 01:37:28 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az841-706 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `211`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `332`ns (174%)        | `391`ns (205%)                 | `3,012,048`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `491`ns (257%)        | `571`ns (299%)                 | `2,036,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `552`ns (289%)        | `633`ns (331%)                 | `1,811,594`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,112`ns (582%)      | `1,244`ns (651%)               | `899,281`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,283`ns (672%)      | `1,484`ns (777%)               | `779,423`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,294`ns (677%)      | `1,484`ns (777%)               | `772,798`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,715`ns (1,421%)    | `2,987`ns (1,564%)             | `368,324`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,563`ns (2,389%)    | `5,063`ns (2,651%)             | `219,154`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,303`ns (4,871%)    | `9,583`ns (5,017%)             | `107,492`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `842`ns (120%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,903`ns (4,551%)   | `39,039`ns (5,569%)            | `31,345`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,319`ns (5,752%)   | `40,895`ns (5,834%)            | `24,802`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `210`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `332`ns (174%)        | `382`ns (200%)                 | `3,012,048`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (236%)        | `511`ns (268%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (294%)        | `631`ns (330%)                 | `1,782,531`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,192`ns (624%)      | `1,324`ns (693%)               | `838,926`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,244`ns (651%)      | `1,454`ns (761%)               | `803,859`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,399`ns (2,303%)    | `4,983`ns (2,609%)             | `227,324`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `221`ns (111%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `392`ns (196%)        | `431`ns (215%)                 | `2,551,020`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (240%)        | `531`ns (266%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,322`ns (661%)      | `1,393`ns (697%)               | `756,430`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,765`ns (882%)      | `1,914`ns (957%)               | `566,572`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,851`ns (2,926%)    | `6,015`ns (3,008%)             | `170,911`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,695`ns (3,348%)    | `6,967`ns (3,484%)             | `149,365`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `562`ns (100%)        | `642`ns (114%)                 | `1,779,359`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `582`ns (104%)        | `652`ns (116%)                 | `1,718,213`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `661`ns (118%)        | `751`ns (134%)                 | `1,512,859`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `332`ns (110%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (173%)        | `582`ns (193%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
