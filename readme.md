# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 27 Oct 2021 01:18:49 GMT with Node.js v16.13.0 (V8 v9.4.146.19-node.13) on fv-az216-816 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The 99th percentile of execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `3,201`ns (100%)                 | `312,402`/sec                            |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `111,423`ns (3481%)              | `8,975`/sec                              |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `345,855`ns (10805%)             | `2,891`/sec                              |

### Convert 4 inches to millimeters

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| math (baseline)                                                    | `202`ns (100%)                   | `4,950,495`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `600`ns (297%)                   | `1,666,667`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (297%)                   | `1,666,667`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,001`ns (496%)                 | `999,001`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `2,401`ns (1189%)                | `416,493`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `2,501`ns (1238%)                | `399,840`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `15,407`ns (7627%)               | `64,906`/sec                             |

### Convert 2.5 liters to cubic inches

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| math (baseline)                                                    | `202`ns (100%)                   | `4,950,495`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (347%)                   | `1,426,534`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `1,200`ns (594%)                 | `833,333`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `3,501`ns (1733%)                | `285,633`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `5,603`ns (2774%)                | `178,476`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `16,703`ns (8269%)               | `59,869`/sec                             |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `17,807`ns (8815%)               | `56,158`/sec                             |

### Convert 24 hours to minutes

| Library                                                            | Execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | -------------------------------- | ---------------------------------------- |
| math (baseline)                                                    | `300`ns (100%)                   | `3,333,333`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `900`ns (300%)                   | `1,111,111`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `1,200`ns (400%)                 | `833,333`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,500`ns (500%)                 | `666,667`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `2,301`ns (767%)                 | `434,594`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `4,603`ns (1534%)                | `217,250`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `5,203`ns (1734%)                | `192,197`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `12,807`ns (4269%)               | `78,082`/sec                             |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `17,103`ns (5701%)               | `58,469`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,103`ns (7034%)               | `47,387`/sec                             |

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
