# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 12 Jun 2026 11:15:04 GMT with Node.js v24.16.0 (V8 v13.6.233.17-node.49) on runnervm1li68 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `111`ns (278%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `120`ns (300%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `130`ns (325%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (503%)        | `210`ns (525%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `350`ns (875%)        | `351`ns (878%)                 | `2,857,143`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `511`ns (1,278%)      | `521`ns (1,303%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `621`ns (1,553%)      | `631`ns (1,578%)               | `1,610,306`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,052`ns (2,630%)    | `1,062`ns (2,655%)             | `950,570`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,773`ns (4,433%)    | `1,794`ns (4,485%)             | `564,016`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `631`ns (100%)        | `691`ns (110%)                 | `1,584,786`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,814`ns (287%)      | `1,984`ns (314%)               | `551,268`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,631`ns (4,062%)   | `26,735`ns (4,237%)            | `39,015`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `120`ns (200%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (352%)        | `221`ns (368%)                 | `4,739,336`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `641`ns (1,068%)      | `642`ns (1,070%)               | `1,560,062`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,964`ns (3,273%)    | `2,024`ns (3,373%)             | `509,165`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (278%)        | `120`ns (300%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `131`ns (328%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `170`ns (425%)        | `171`ns (428%)                 | `5,882,353`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `470`ns (1,175%)      | `481`ns (1,203%)               | `2,127,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,552`ns (3,880%)    | `1,563`ns (3,908%)             | `644,330`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,777`ns (6,943%)    | `2,855`ns (7,138%)             | `360,101`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `211`ns (100%)        | `220`ns (104%)                 | `4,739,336`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (114%)        | `241`ns (114%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `301`ns (143%)        | `311`ns (147%)                 | `3,322,259`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `91`ns (182%)         | `110`ns (220%)                 | `10,989,011`/sec      |

<!-- endblock(results) -->
