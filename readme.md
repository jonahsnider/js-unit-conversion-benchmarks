# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 27 Oct 2021 01:15:25 GMT with Node.js v16.13.0 (V8 v9.4.146.19-node.13) on fv-az292-77 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 100 times to allow the runtime to warmup.
Afterward 1,000 trials were performed for each library.
The 99th percentile of execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `23,311`ns (100%)                | `42,898`/sec                             |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `185,471`ns (796%)               | `5,392`/sec                              |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,962,047`ns (38446%)           | `112`/sec                                |

### Convert 4 inches to millimeters

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| math (baseline)                                                    | `900`ns (100%)                   | `1,111,111`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `17,615`ns (1957%)               | `56,770`/sec                             |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `18,111`ns (2012%)               | `55,215`/sec                             |
| [uom](https://npmjs.com/package/uom) (fast)                        | `19,615`ns (2179%)               | `50,981`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `23,103`ns (2567%)               | `43,284`/sec                             |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `26,015`ns (2891%)               | `38,439`/sec                             |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `72,447`ns (8050%)               | `13,803`/sec                             |

### Convert 2.5 liters to cubic inches

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| math (baseline)                                                    | `1,101`ns (100%)                 | `908,265`/sec                            |
| [convert](https://npmjs.com/package/convert) (fast)                | `6,403`ns (582%)                 | `156,177`/sec                            |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `9,007`ns (818%)                 | `111,025`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `28,111`ns (2553%)               | `35,573`/sec                             |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `28,415`ns (2581%)               | `35,193`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,919`ns (3444%)               | `26,372`/sec                             |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `135,039`ns (12265%)             | `7,405`/sec                              |

### Convert 24 hours to minutes

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| math (baseline)                                                    | `502`ns (100%)                   | `1,992,032`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `6,603`ns (1315%)                | `151,446`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `16,703`ns (3327%)               | `59,869`/sec                             |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `18,911`ns (3767%)               | `52,879`/sec                             |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `26,111`ns (5201%)               | `38,298`/sec                             |
| [moment](https://npmjs.com/package/moment) (popular)               | `26,703`ns (5319%)               | `37,449`/sec                             |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `27,407`ns (5460%)               | `36,487`/sec                             |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `117,311`ns (23369%)             | `8,524`/sec                              |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140,159`ns (27920%)             | `7,135`/sec                              |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `148,991`ns (29679%)             | `6,712`/sec                              |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | -------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `8,103`ns (100%)                 | `123,411`/sec                            |
| [convert](https://npmjs.com/package/convert) (fast)       | `12,303`ns (152%)                | `81,281`/sec                             |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `16,511`ns (204%)                | `60,566`/sec                             |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | -------------------------------- | ---------------------------------------- |
| math (baseline)                                     | `4,403`ns (100%)                 | `227,118`/sec                            |
| [convert](https://npmjs.com/package/convert) (fast) | `16,415`ns (373%)                | `60,920`/sec                             |

<!-- endblock(results) -->

## Benchmark strategy

Common use cases are implemented using each library and run several times while their execution times are recorded.

Afterward, the 99th percentile of each library's execution time is used to generate the tables shown above.
