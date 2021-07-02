# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 02 Jul 2021 02:09:20 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-680 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `238`ns (100%)                           | `4,203,804`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `470`ns (198%)                           | `2,125,624`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `690`ns (290%)                           | `1,450,028`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,296`ns (545%)                         | `771,384`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,423`ns (598%)                         | `702,707`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,772`ns (2426%)                        | `173,247`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `233`ns (100%)                           | `4,284,392`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `360`ns (154%)                           | `2,777,916`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,408`ns (603%)                         | `710,002`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,503`ns (644%)                         | `665,422`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,664`ns (2855%)                        | `150,056`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,630`ns (3269%)                        | `131,070`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `248`ns (100%)                           | `4,036,498`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `395`ns (160%)                           | `2,529,678`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `703`ns (284%)                           | `1,421,673`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,112`ns (449%)                         | `899,031`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,334`ns (539%)                         | `749,459`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,445`ns (583%)                         | `691,979`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `3,005`ns (1213%)                        | `332,806`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,657`ns (2283%)                        | `176,780`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `10,444`ns (4216%)                       | `95,745`/sec                             |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)       | `826`ns (100%)                           | `1,210,376`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `837`ns (101%)                           | `1,194,363`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `872`ns (106%)                           | `1,146,275`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `377`ns (100%)                           | `2,652,673`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `774`ns (205%)                           | `1,291,537`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
