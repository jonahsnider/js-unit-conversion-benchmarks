# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 04 Oct 2021 06:31:33 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-242 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `782`ns (100%)                           | `1,278,723`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `50,416`ns (6447%)                       | `19,835`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `69,946`ns (8944%)                       | `14,297`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `250`ns (100%)                           | `3,996,251`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `459`ns (184%)                           | `2,176,511`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `633`ns (253%)                           | `1,580,806`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,305`ns (521%)                         | `766,555`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,353`ns (541%)                         | `739,279`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,738`ns (1894%)                        | `211,050`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `275`ns (100%)                           | `3,633,160`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `422`ns (153%)                           | `2,368,557`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,115`ns (405%)                         | `896,479`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,377`ns (500%)                         | `725,984`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,601`ns (2035%)                        | `178,542`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,725`ns (2443%)                        | `148,703`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `271`ns (100%)                           | `3,690,085`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `458`ns (169%)                           | `2,182,501`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `659`ns (243%)                           | `1,517,297`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,016`ns (375%)                         | `984,149`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,216`ns (449%)                         | `822,065`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,389`ns (512%)                         | `720,065`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,161`ns (797%)                         | `462,818`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,868`ns (1796%)                        | `205,434`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,042`ns (3337%)                        | `110,592`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `780`ns (100%)                           | `1,281,973`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `834`ns (107%)                           | `1,199,504`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `860`ns (110%)                           | `1,163,297`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `419`ns (100%)                           | `2,387,631`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `677`ns (162%)                           | `1,477,985`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
