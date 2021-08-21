# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 21 Aug 2021 03:58:38 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-823 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `149`ns (100%)                           | `6,712,190`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `286`ns (192%)                           | `3,495,049`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `409`ns (275%)                           | `2,445,215`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `793`ns (532%)                           | `1,261,548`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,066`ns (716%)                         | `938,083`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,477`ns (2333%)                        | `287,646`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `150`ns (100%)                           | `6,649,606`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `258`ns (172%)                           | `3,872,090`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `803`ns (534%)                           | `1,245,064`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `958`ns (637%)                           | `1,044,275`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,453`ns (2961%)                        | `224,565`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,504`ns (2995%)                        | `222,003`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `147`ns (100%)                           | `6,822,647`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `263`ns (180%)                           | `3,796,807`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `383`ns (261%)                           | `2,610,724`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `623`ns (425%)                           | `1,604,206`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `926`ns (632%)                           | `1,079,710`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,111`ns (758%)                         | `899,875`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,463`ns (998%)                         | `683,658`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,307`ns (2256%)                        | `302,385`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,860`ns (4680%)                        | `145,776`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `461`ns (100%)                           | `2,167,488`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `528`ns (115%)                           | `1,892,330`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `561`ns (122%)                           | `1,783,550`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `227`ns (100%)                           | `4,402,211`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `506`ns (223%)                           | `1,978,108`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
