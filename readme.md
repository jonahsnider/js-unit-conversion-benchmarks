# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 14 Oct 2021 00:53:27 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-649 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `578`ns (100%)                           | `1,729,077`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,261`ns (5578%)                       | `30,997`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,889`ns (12430%)                      | `13,910`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `176`ns (100%)                           | `5,689,657`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `290`ns (165%)                           | `3,446,878`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `334`ns (190%)                           | `2,998,169`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `458`ns (261%)                           | `2,181,124`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `908`ns (517%)                           | `1,100,833`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `959`ns (546%)                           | `1,042,686`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,803`ns (2164%)                        | `262,929`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `184`ns (100%)                           | `5,434,358`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `298`ns (162%)                           | `3,356,202`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `305`ns (166%)                           | `3,278,311`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `908`ns (493%)                           | `1,101,705`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `933`ns (507%)                           | `1,071,806`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,851`ns (2636%)                        | `206,155`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,857`ns (2640%)                        | `205,880`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `183`ns (100%)                           | `5,477,599`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `279`ns (153%)                           | `3,590,224`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `306`ns (167%)                           | `3,270,957`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `459`ns (252%)                           | `2,177,891`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `712`ns (390%)                           | `1,404,656`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `880`ns (482%)                           | `1,136,252`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,041`ns (570%)                         | `960,349`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,554`ns (851%)                         | `643,689`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,052`ns (2220%)                        | `246,772`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,633`ns (4181%)                        | `131,010`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)                           | `2,080,133`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `554`ns (115%)                           | `1,804,600`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `607`ns (126%)                           | `1,646,715`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `278`ns (100%)                           | `3,591,387`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `445`ns (160%)                           | `2,246,362`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
