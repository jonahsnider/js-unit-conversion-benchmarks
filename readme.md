# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 08 Nov 2023 00:58:45 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1433-978 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `191`ns (189%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `221`ns (219%)        | `410`ns (406%)                 | `4,524,887`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `281`ns (278%)        | `512`ns (507%)                 | `3,558,719`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `342`ns (339%)        | `662`ns (655%)                 | `2,923,977`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `501`ns (496%)        | `1,072`ns (1,061%)             | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `682`ns (675%)        | `1,424`ns (1,410%)             | `1,466,276`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `712`ns (705%)        | `1,534`ns (1,519%)             | `1,404,494`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,244`ns (1,232%)    | `2,657`ns (2,631%)             | `803,859`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,595`ns (2,569%)    | `4,779`ns (4,732%)             | `385,356`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,503`ns (4,458%)    | `9,359`ns (9,266%)             | `222,074`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `762`ns (100%)        | `852`ns (112%)                 | `1,312,336`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,295`ns (4,107%)   | `38,399`ns (5,039%)            | `31,954`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,359`ns (5,165%)   | `39,967`ns (5,245%)            | `25,407`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (167%)        | `391`ns (186%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `491`ns (234%)        | `531`ns (253%)                 | `2,036,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (272%)        | `621`ns (296%)                 | `1,751,313`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,272`ns (606%)      | `1,353`ns (644%)               | `786,164`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,324`ns (630%)      | `1,433`ns (682%)               | `755,287`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,723`ns (2,249%)    | `4,971`ns (2,367%)             | `211,730`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `222`ns (116%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `382`ns (200%)        | `431`ns (226%)                 | `2,617,801`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `450`ns (236%)        | `501`ns (262%)                 | `2,222,222`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,314`ns (688%)      | `1,414`ns (740%)               | `761,035`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,773`ns (928%)      | `1,953`ns (1,023%)             | `564,016`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,003`ns (3,143%)    | `6,155`ns (3,223%)             | `166,583`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,655`ns (3,484%)    | `6,943`ns (3,635%)             | `150,263`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `563`ns (100%)        | `641`ns (114%)                 | `1,776,199`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (107%)        | `672`ns (119%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (121%)        | `771`ns (137%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `291`ns (100%)        | `321`ns (110%)                 | `3,436,426`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (176%)        | `562`ns (193%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
