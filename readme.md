# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 14 Oct 2021 03:45:13 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-195 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `507`ns (100%)                           | `1,971,131`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,048`ns (6317%)                       | `31,203`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70,462`ns (13889%)                      | `14,192`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `183`ns (100%)                           | `5,465,979`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `242`ns (132%)                           | `4,128,106`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `313`ns (171%)                           | `3,194,963`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `477`ns (261%)                           | `2,098,262`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `780`ns (427%)                           | `1,281,332`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `952`ns (520%)                           | `1,050,865`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,579`ns (1956%)                        | `279,441`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `185`ns (100%)                           | `5,392,761`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `271`ns (146%)                           | `3,689,932`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `283`ns (153%)                           | `3,534,784`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `926`ns (499%)                           | `1,079,900`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `963`ns (519%)                           | `1,038,327`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,846`ns (2613%)                        | `206,356`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,041`ns (2719%)                        | `198,354`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `184`ns (100%)                           | `5,445,206`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `258`ns (141%)                           | `3,868,953`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `281`ns (153%)                           | `3,556,610`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `530`ns (288%)                           | `1,888,125`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `760`ns (414%)                           | `1,315,178`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `783`ns (426%)                           | `1,277,778`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `987`ns (538%)                           | `1,012,858`/sec                          |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,296`ns (706%)                         | `771,605`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,641`ns (1983%)                        | `274,620`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,681`ns (4182%)                        | `130,199`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)       | `480`ns (100%)                           | `2,081,643`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `494`ns (103%)                           | `2,025,700`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `572`ns (119%)                           | `1,749,595`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `267`ns (100%)                           | `3,749,792`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `440`ns (165%)                           | `2,274,976`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
