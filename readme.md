# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 14 May 2024 11:58:58 GMT with Node.js v18.20.2 (V8 v10.2.154.26-node.36) on fv-az1380-759 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `141`ns (117%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (249%)        | `341`ns (282%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (348%)        | `511`ns (422%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (497%)        | `691`ns (571%)                 | `1,663,894`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,072`ns (886%)      | `1,182`ns (977%)               | `932,836`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,172`ns (969%)      | `1,332`ns (1,101%)             | `853,242`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,312`ns (1,084%)    | `1,442`ns (1,192%)             | `762,195`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,455`ns (2,029%)    | `2,655`ns (2,194%)             | `407,332`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,379`ns (3,619%)    | `4,659`ns (3,850%)             | `228,363`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,423`ns (59,027%)  | `73,151`ns (60,455%)           | `14,001`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `912`ns (100%)        | `1,202`ns (132%)               | `1,096,491`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,031`ns (3,951%)   | `52,255`ns (5,730%)            | `27,754`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,415`ns (9,256%)   | `156,927`ns (17,207%)          | `11,846`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (214%)        | `331`ns (236%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (329%)        | `521`ns (372%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (372%)        | `581`ns (415%)                 | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,253`ns (895%)      | `1,402`ns (1,001%)             | `798,085`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,551`ns (3,251%)    | `4,839`ns (3,456%)             | `219,732`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,927`ns (26,376%)  | `37,887`ns (27,062%)           | `27,080`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (262%)        | `401`ns (308%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `521`ns (401%)        | `601`ns (462%)                 | `1,919,386`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,403`ns (1,079%)    | `1,593`ns (1,225%)             | `712,758`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,914`ns (1,472%)    | `2,575`ns (1,981%)             | `522,466`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,703`ns (5,156%)    | `8,311`ns (6,393%)             | `149,187`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,615`ns (61,242%)  | `81,791`ns (62,916%)           | `12,560`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `551`ns (112%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (106%)        | `571`ns (116%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `591`ns (120%)        | `661`ns (135%)                 | `1,692,047`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `250`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `562`ns (244%)        | `621`ns (270%)                 | `1,779,359`/sec       |

<!-- endblock(results) -->
