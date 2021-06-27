# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 27 Jun 2021 13:57:04 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-942 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `230`ns (100%)                           | `4,346,319`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `379`ns (165%)                           | `2,635,837`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (244%)                           | `1,782,380`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,089`ns (473%)                         | `918,501`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,104`ns (480%)                         | `905,718`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,300`ns (1869%)                        | `232,583`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `239`ns (100%)                           | `4,189,544`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (143%)                           | `2,926,665`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,081`ns (453%)                         | `925,360`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,195`ns (501%)                         | `836,657`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,614`ns (2352%)                        | `178,123`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,794`ns (2427%)                        | `172,606`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `231`ns (100%)                           | `4,323,455`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (152%)                           | `2,846,449`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `545`ns (236%)                           | `1,834,212`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `845`ns (365%)                           | `1,184,117`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,155`ns (499%)                         | `865,672`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,229`ns (532%)                         | `813,349`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,286`ns (988%)                         | `437,484`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,396`ns (1901%)                        | `227,480`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,094`ns (3932%)                        | `109,962`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `616`ns (100%)                           | `1,623,260`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `645`ns (105%)                           | `1,551,080`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `743`ns (121%)                           | `1,345,313`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `343`ns (100%)                           | `2,913,352`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `672`ns (196%)                           | `1,488,061`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
