# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 26 Aug 2021 03:35:38 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-741 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `181`ns (100%)                           | `5,511,734`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `370`ns (204%)                           | `2,702,295`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `458`ns (252%)                           | `2,185,029`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `975`ns (537%)                           | `1,025,906`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,357`ns (748%)                         | `736,856`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,910`ns (2155%)                        | `255,754`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `172`ns (100%)                           | `5,828,592`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `297`ns (173%)                           | `3,362,010`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `964`ns (562%)                           | `1,037,130`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `993`ns (579%)                           | `1,007,069`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,022`ns (2927%)                        | `199,135`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,190`ns (3025%)                        | `192,682`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `183`ns (100%)                           | `5,455,887`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `293`ns (160%)                           | `3,416,991`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `449`ns (245%)                           | `2,227,838`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `750`ns (409%)                           | `1,333,976`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `878`ns (479%)                           | `1,139,239`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,139`ns (621%)                         | `877,960`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,737`ns (947%)                         | `575,831`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,090`ns (2231%)                        | `244,528`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,888`ns (4303%)                        | `126,780`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `610`ns (100%)                           | `1,639,378`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `629`ns (103%)                           | `1,589,927`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `705`ns (116%)                           | `1,418,872`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `305`ns (100%)                           | `3,282,514`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `580`ns (190%)                           | `1,724,979`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
