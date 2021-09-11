# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 11 Sep 2021 03:32:01 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-983 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `168`ns (100%)                           | `5,943,781`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `323`ns (192%)                           | `3,098,353`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `462`ns (275%)                           | `2,165,087`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `879`ns (522%)                           | `1,137,752`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `902`ns (536%)                           | `1,108,487`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,837`ns (2281%)                        | `260,625`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `170`ns (100%)                           | `5,869,027`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `238`ns (140%)                           | `4,198,112`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `896`ns (526%)                           | `1,116,230`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `901`ns (529%)                           | `1,110,483`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,782`ns (2806%)                        | `209,133`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,167`ns (3032%)                        | `193,554`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `170`ns (100%)                           | `5,876,199`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `259`ns (152%)                           | `3,861,020`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `490`ns (288%)                           | `2,041,736`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `702`ns (413%)                           | `1,423,885`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `868`ns (510%)                           | `1,152,524`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `998`ns (586%)                           | `1,002,476`/sec                          |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,533`ns (901%)                         | `652,218`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,943`ns (2317%)                        | `253,606`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,539`ns (4430%)                        | `132,644`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `486`ns (100%)                           | `2,058,432`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `535`ns (110%)                           | `1,869,332`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `590`ns (121%)                           | `1,695,623`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `263`ns (100%)                           | `3,797,472`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `506`ns (192%)                           | `1,976,410`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
