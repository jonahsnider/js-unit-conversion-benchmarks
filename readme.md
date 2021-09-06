# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 06 Sep 2021 03:23:39 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-732 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `216`ns (100%)                           | `4,618,942`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `399`ns (184%)                           | `2,507,029`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (245%)                           | `1,884,713`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,025`ns (474%)                         | `975,205`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,356`ns (626%)                         | `737,666`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,420`ns (2041%)                        | `226,268`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `207`ns (100%)                           | `4,835,236`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `343`ns (166%)                           | `2,915,989`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,043`ns (504%)                         | `958,952`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,064`ns (515%)                         | `939,729`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,651`ns (2733%)                        | `176,945`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,296`ns (3044%)                        | `158,829`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `216`ns (100%)                           | `4,622,811`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `333`ns (154%)                           | `3,006,963`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `518`ns (239%)                           | `1,931,970`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `880`ns (407%)                           | `1,136,264`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,041`ns (481%)                         | `960,633`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,166`ns (539%)                         | `857,294`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,929`ns (892%)                         | `518,302`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,522`ns (2090%)                        | `221,145`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,922`ns (4124%)                        | `112,083`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `637`ns (100%)                           | `1,570,676`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `662`ns (104%)                           | `1,509,990`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `705`ns (111%)                           | `1,417,759`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `330`ns (100%)                           | `3,030,880`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `652`ns (197%)                           | `1,534,789`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
