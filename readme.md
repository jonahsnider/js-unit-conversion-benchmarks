# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 02 Dec 2023 12:25:15 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1153-398 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `211`ns (100%)        | `231`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `382`ns (181%)        | `431`ns (204%)                 | `2,617,801`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (237%)        | `551`ns (261%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (332%)        | `751`ns (356%)                 | `1,426,534`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,043`ns (494%)      | `1,142`ns (541%)               | `958,773`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,293`ns (613%)      | `1,453`ns (689%)               | `773,395`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,404`ns (665%)      | `1,533`ns (727%)               | `712,251`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,845`ns (1,348%)    | `3,027`ns (1,435%)             | `351,494`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,819`ns (2,284%)    | `5,151`ns (2,441%)             | `207,512`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,439`ns (4,473%)    | `9,655`ns (4,576%)             | `105,943`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `762`ns (100%)        | `842`ns (110%)                 | `1,312,336`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,391`ns (4,120%)   | `38,143`ns (5,006%)            | `31,856`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,007`ns (5,119%)   | `39,551`ns (5,190%)            | `25,636`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `221`ns (109%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (179%)        | `412`ns (204%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (223%)        | `511`ns (253%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (288%)        | `651`ns (322%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,242`ns (615%)      | `1,352`ns (669%)               | `805,153`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,303`ns (645%)      | `1,463`ns (724%)               | `767,460`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,659`ns (2,306%)    | `5,031`ns (2,491%)             | `214,638`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `221`ns (100%)        | `242`ns (110%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `391`ns (177%)        | `431`ns (195%)                 | `2,557,545`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `462`ns (209%)        | `511`ns (231%)                 | `2,164,502`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,384`ns (626%)      | `1,463`ns (662%)               | `722,543`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,843`ns (834%)      | `2,004`ns (907%)               | `542,594`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,063`ns (2,743%)    | `6,195`ns (2,803%)             | `164,935`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,007`ns (3,171%)    | `7,267`ns (3,288%)             | `142,714`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `662`ns (114%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `612`ns (105%)        | `682`ns (117%)                 | `1,633,987`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `692`ns (119%)        | `781`ns (134%)                 | `1,445,087`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `330`ns (110%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `502`ns (167%)        | `561`ns (187%)                 | `1,992,032`/sec       |

<!-- endblock(results) -->
