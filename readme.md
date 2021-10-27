# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 27 Oct 2021 01:22:57 GMT with Node.js v16.13.0 (V8 v9.4.146.19-node.13) on fv-az154-209 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The 99th percentile of execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| math (baseline)                                                    | `302`ns (100%)                   | `3,311,258`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `800`ns (265%)                   | `1,250,000`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `1,101`ns (365%)                 | `908,265`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,500`ns (497%)                 | `666,667`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `2,101`ns (696%)                 | `475,964`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `4,001`ns (1325%)                | `249,938`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `4,503`ns (1491%)                | `222,074`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `17,503`ns (5796%)               | `57,133`/sec                             |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `22,015`ns (7290%)               | `45,424`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `29,407`ns (9737%)               | `34,006`/sec                             |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `6,503`ns (100%)                 | `153,775`/sec                            |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `151,935`ns (2336%)              | `6,582`/sec                              |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `284,927`ns (4381%)              | `3,510`/sec                              |

### Convert 4 inches to millimeters

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| math (baseline)                                                    | `300`ns (100%)                   | `3,333,333`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (234%)                   | `1,426,534`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `800`ns (267%)                   | `1,250,000`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,300`ns (433%)                 | `769,231`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `3,301`ns (1100%)                | `302,939`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `4,903`ns (1634%)                | `203,957`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `21,407`ns (7136%)               | `46,714`/sec                             |

### Convert 2.5 liters to cubic inches

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| math (baseline)                                                    | `300`ns (100%)                   | `3,333,333`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `900`ns (300%)                   | `1,111,111`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `1,101`ns (367%)                 | `908,265`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `12,903`ns (4301%)               | `77,501`/sec                             |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `13,703`ns (4568%)               | `72,977`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `23,007`ns (7669%)               | `43,465`/sec                             |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `25,311`ns (8437%)               | `39,509`/sec                             |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | -------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `600`ns (100%)                   | `1,666,667`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `601`ns (100%)                   | `1,663,894`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `801`ns (134%)                   | `1,248,439`/sec                          |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | -------------------------------- | ---------------------------------------- |
| math (baseline)                                     | `301`ns (100%)                   | `3,322,259`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `501`ns (166%)                   | `1,996,008`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Common use cases are implemented using each library and run several times while their execution times are recorded.

Afterward, the 99th percentile of each library's execution time is used to generate the tables shown above.
