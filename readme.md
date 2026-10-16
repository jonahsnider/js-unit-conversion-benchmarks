# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 16 Oct 2026 21:07:25 GMT with Node.js v26.12.0 (V8 v14.6.202.34-node.39) on runnervm8k3b6 (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `42`ns (100%)         | `44`ns (105%)                  | `23,809,524`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `113`ns (269%)        | `117`ns (279%)                 | `8,849,558`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (288%)        | `124`ns (295%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `126`ns (300%)        | `151`ns (360%)                 | `7,936,508`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (502%)        | `235`ns (560%)                 | `4,739,336`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `327`ns (779%)        | `342`ns (814%)                 | `3,058,104`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `482`ns (1,148%)      | `540`ns (1,286%)               | `2,074,689`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `502`ns (1,195%)      | `514`ns (1,224%)               | `1,992,032`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,060`ns (2,524%)    | `1,167`ns (2,779%)             | `943,396`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,781`ns (4,240%)    | `1,838`ns (4,376%)             | `561,482`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `402`ns (100%)        | `422`ns (105%)                 | `2,487,562`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,363`ns (339%)      | `1,465`ns (364%)               | `733,676`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `21,807`ns (5,425%)   | `22,191`ns (5,520%)            | `45,857`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `108`ns (180%)        | `113`ns (188%)                 | `9,259,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `109`ns (182%)        | `111`ns (185%)                 | `9,174,312`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (185%)        | `118`ns (197%)                 | `9,009,009`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `209`ns (348%)        | `227`ns (378%)                 | `4,784,689`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `486`ns (810%)        | `507`ns (845%)                 | `2,057,613`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,895`ns (3,158%)    | `1,951`ns (3,252%)             | `527,704`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `39`ns (100%)         | `40`ns (103%)                  | `25,641,026`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `112`ns (287%)        | `115`ns (295%)                 | `8,928,571`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `117`ns (300%)        | `121`ns (310%)                 | `8,547,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `126`ns (323%)        | `130`ns (333%)                 | `7,936,508`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `510`ns (1,308%)      | `592`ns (1,518%)               | `1,960,784`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,125`ns (2,885%)    | `1,158`ns (2,969%)             | `888,889`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,561`ns (6,567%)    | `2,659`ns (6,818%)             | `390,472`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `221`ns (100%)        | `224`ns (101%)                 | `4,524,887`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `249`ns (113%)        | `252`ns (114%)                 | `4,016,064`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `292`ns (132%)        | `313`ns (142%)                 | `3,424,658`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `43`ns (100%)         | `68`ns (158%)                  | `23,255,814`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (233%)        | `196`ns (456%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
