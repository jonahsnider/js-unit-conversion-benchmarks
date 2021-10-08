# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 08 Oct 2021 01:52:03 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az201-93 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `595`ns (100%)                           | `1,680,964`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,797`ns (5345%)                       | `31,449`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `69,309`ns (11651%)                      | `14,428`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `169`ns (100%)                           | `5,930,536`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (190%)                           | `3,115,324`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `520`ns (308%)                           | `1,922,483`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `968`ns (574%)                           | `1,033,279`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `973`ns (577%)                           | `1,028,001`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,716`ns (2204%)                        | `269,081`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `173`ns (100%)                           | `5,783,792`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (174%)                           | `3,321,189`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `920`ns (532%)                           | `1,087,235`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `934`ns (540%)                           | `1,070,447`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,895`ns (2831%)                        | `204,311`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,468`ns (3163%)                        | `182,885`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `172`ns (100%)                           | `5,799,150`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `313`ns (181%)                           | `3,195,411`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `477`ns (277%)                           | `2,096,933`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `711`ns (413%)                           | `1,405,613`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `901`ns (522%)                           | `1,110,242`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,006`ns (583%)                         | `994,052`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,583`ns (918%)                         | `631,805`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,792`ns (2199%)                        | `263,700`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,688`ns (4458%)                        | `130,070`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `487`ns (100%)                           | `2,052,387`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `590`ns (121%)                           | `1,695,415`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `623`ns (128%)                           | `1,605,571`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `263`ns (100%)                           | `3,802,278`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `472`ns (179%)                           | `2,120,113`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
