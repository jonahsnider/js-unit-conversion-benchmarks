# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 14 Sep 2021 02:03:14 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-389 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `157`ns (100%)                           | `6,376,308`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `322`ns (205%)                           | `3,104,403`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `643`ns (410%)                           | `1,555,146`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `898`ns (573%)                           | `1,113,017`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `990`ns (631%)                           | `1,010,158`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,796`ns (2420%)                        | `263,466`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `161`ns (100%)                           | `6,227,830`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `283`ns (176%)                           | `3,539,040`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `923`ns (575%)                           | `1,083,725`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,048`ns (653%)                         | `953,949`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,833`ns (3010%)                        | `206,921`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,065`ns (3155%)                        | `197,419`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `159`ns (100%)                           | `6,269,598`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `275`ns (172%)                           | `3,637,856`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `465`ns (291%)                           | `2,150,995`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `838`ns (525%)                           | `1,193,460`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `911`ns (571%)                           | `1,098,176`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,000`ns (627%)                         | `999,751`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,515`ns (950%)                         | `660,265`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,715`ns (2329%)                        | `269,180`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,506`ns (4706%)                        | `133,225`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `486`ns (100%)                           | `2,057,783`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `606`ns (125%)                           | `1,651,288`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `626`ns (129%)                           | `1,598,021`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `248`ns (100%)                           | `4,027,478`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `503`ns (203%)                           | `1,986,933`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
