# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 30 Aug 2021 05:39:35 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az213-105 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `254`ns (100%)                           | `3,934,450`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `457`ns (180%)                           | `2,187,693`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `653`ns (257%)                           | `1,531,210`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,252`ns (492%)                         | `798,969`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,909`ns (751%)                         | `523,966`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,230`ns (2451%)                        | `160,526`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `237`ns (100%)                           | `4,225,004`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `415`ns (175%)                           | `2,407,792`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,323`ns (559%)                         | `756,127`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,412`ns (597%)                         | `708,195`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,700`ns (2831%)                        | `149,253`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,112`ns (3005%)                        | `140,599`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `251`ns (100%)                           | `3,977,469`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `420`ns (167%)                           | `2,382,765`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `654`ns (260%)                           | `1,529,916`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `930`ns (370%)                           | `1,074,999`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,207`ns (480%)                         | `828,616`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,542`ns (613%)                         | `648,682`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,307`ns (918%)                         | `433,444`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,145`ns (2046%)                        | `194,382`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `10,034`ns (3991%)                       | `99,663`/sec                             |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `762`ns (100%)                           | `1,312,611`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `811`ns (106%)                           | `1,233,770`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `964`ns (126%)                           | `1,037,722`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `370`ns (100%)                           | `2,705,556`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `789`ns (214%)                           | `1,267,208`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
