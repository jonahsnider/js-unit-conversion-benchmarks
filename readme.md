# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 11 Sep 2021 02:06:40 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-8 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `269`ns (100%)                           | `3,716,793`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (138%)                           | `2,689,871`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `656`ns (244%)                           | `1,525,255`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,024`ns (381%)                         | `976,454`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,380`ns (513%)                         | `724,411`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,178`ns (1925%)                        | `193,117`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `245`ns (100%)                           | `4,084,492`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `307`ns (125%)                           | `3,260,502`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,243`ns (508%)                         | `804,760`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,391`ns (568%)                         | `718,794`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,121`ns (2092%)                        | `195,257`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,825`ns (2788%)                        | `146,513`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `246`ns (100%)                           | `4,070,638`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `319`ns (130%)                           | `3,132,487`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `674`ns (275%)                           | `1,482,856`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,065`ns (434%)                         | `938,867`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,198`ns (488%)                         | `834,931`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,266`ns (516%)                         | `789,606`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,096`ns (853%)                         | `477,017`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,196`ns (2115%)                        | `192,438`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,192`ns (3742%)                        | `108,792`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `636`ns (100%)                           | `1,572,133`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `657`ns (103%)                           | `1,522,558`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `856`ns (135%)                           | `1,168,751`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `377`ns (100%)                           | `2,649,479`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `578`ns (153%)                           | `1,730,889`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
