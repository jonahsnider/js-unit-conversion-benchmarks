# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 23 Oct 2021 02:12:12 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-310 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `623`ns (100%)                           | `1,606,402`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `39,132`ns (6286%)                       | `25,555`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,798`ns (13622%)                      | `11,793`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `193`ns (100%)                           | `5,187,560`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `261`ns (135%)                           | `3,838,721`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (182%)                           | `2,853,262`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `456`ns (236%)                           | `2,193,744`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `885`ns (459%)                           | `1,130,097`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `958`ns (497%)                           | `1,043,778`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,258`ns (2209%)                        | `234,847`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `202`ns (100%)                           | `4,943,203`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `328`ns (162%)                           | `3,050,020`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `332`ns (164%)                           | `3,009,608`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,001`ns (495%)                         | `998,720`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,121`ns (554%)                         | `891,734`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,702`ns (2819%)                        | `175,380`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,756`ns (2845%)                        | `173,740`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `198`ns (100%)                           | `5,052,450`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `339`ns (171%)                           | `2,946,248`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `361`ns (182%)                           | `2,773,027`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `497`ns (251%)                           | `2,013,139`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `871`ns (440%)                           | `1,147,917`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `937`ns (473%)                           | `1,067,684`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,067`ns (539%)                         | `936,964`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,629`ns (823%)                         | `613,926`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,982`ns (2012%)                        | `251,144`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,159`ns (4628%)                        | `109,179`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)       | `564`ns (100%)                           | `1,774,256`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `593`ns (105%)                           | `1,687,541`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `709`ns (126%)                           | `1,410,432`/sec                          |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `313`ns (100%)                           | `3,196,404`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `516`ns (165%)                           | `1,936,303`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
